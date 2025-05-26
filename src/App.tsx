import { useState, useEffect } from "react";
import { questoes } from "./store/questoes.ts";
import "./App.css";
import terra_1 from "./assets/high.png";
import terra_2 from "./assets/mid.png";
import terra_3 from "./assets/low.png";
import logo from "./assets/logo.png";
import { getOrCreateUserId } from "./utils/getOrCreateUserId.ts";
import { getCookie, setCookie } from "./utils/cookieUtils.ts";
import axios from "axios";
import { contatos } from "./store/contatos.ts";

const imagens = [terra_1, terra_2, terra_3];

function App() {
    const totalQuestoes = questoes.length;
    const totalImagens = imagens.length;

    const [errorCount, setErrorCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showIntro, setShowIntro] = useState(true);

    const id = getOrCreateUserId();

    useEffect(() => {
        const savedQuestion = parseInt(getCookie("QUIZ_CURRENT") || "0", 10);
        const savedErrors = parseInt(getCookie("QUIZ_ERRORS") || "0", 10);
        setCurrentQuestion(savedQuestion);
        setErrorCount(savedErrors);
    }, []);

    const indiceImagem = Math.min(
        Math.floor((errorCount / totalQuestoes) * totalImagens),
        totalImagens - 1
    );

    function handleAnswer(optionIndex: number) {
        if (currentQuestion >= totalQuestoes) return;

        setSelectedAnswer(optionIndex);
        const isCorrect = optionIndex === questoes[currentQuestion].respostaCorreta;

        if (!isCorrect) {
            const newErrorCount = errorCount + 1;
            setErrorCount(newErrorCount);
            setCookie("QUIZ_ERRORS", String(newErrorCount));
        }

        const scriptUrl = import.meta.env.VITE_APP_SCRIPT_URL;
        const form = new URLSearchParams();
        form.append("id", id);
        form.append("question", String(currentQuestion));
        form.append("response", String(optionIndex));
        form.append("isCorrect", String(isCorrect));

        axios.post(scriptUrl, form, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        setTimeout(() => {
            if (currentQuestion + 1 < totalQuestoes) {
                const nextQuestion = currentQuestion + 1;
                setCurrentQuestion(nextQuestion);
                setCookie("QUIZ_CURRENT", String(nextQuestion));
                setSelectedAnswer(null);
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
        }, 2000);
    }

    const handleReturnHome = () => {
        setCookie("QUIZ_CURRENT", "0", -1);
        setCookie("QUIZ_ERRORS", "0", -1);
        setCurrentQuestion(0);
        setErrorCount(0);
        setSelectedAnswer(null);
        localStorage.removeItem("user_id");
        setShowIntro(true);
    };

    return (
        <div className="quiz-container">
            <img className="logo" onClick={handleReturnHome} alt="Unidavi" src={logo} />

            {showIntro ? (
                <div className="intro-container">
                    <h1>🌍 Bem-vindo ao Desafio da Sustentabilidade!</h1>
                    <ul className="rules-list">
                        <li>🧠 Serão <strong>{totalQuestoes}</strong> perguntas com alternativas.</li>
                        <li>❌ A cada <strong>{(totalQuestoes / imagens.length).toFixed(0)}</strong> erros, o planeta piora visualmente.</li>
                        <li>🌱 Todas as perguntas são sobre sustentabilidade.</li>
                        <li>💡 Sua missão: ajudar a salvar o planeta!</li>
                    </ul>
                    <button className="start-button" onClick={() => setShowIntro(false)}>
                        Começar
                    </button>
                </div>
            ) : currentQuestion >= totalQuestoes ? (
                <h2 className="endcard">
                    Fim de jogo, você acertou um total de {totalQuestoes - errorCount}
                </h2>
            ) : (
                <div>
                    <h1 className="title">Quiz Salvando o Planeta</h1>
                    <p className="info">
                        Desenvolvido pela turma da 5ª Fase do curso de Sistemas da Informação da UNIDAVI
                    </p>

                    <div className="quiz">
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${(currentQuestion / totalQuestoes) * 100}%` }}
                            />
                        </div>

                        <h2>{questoes[currentQuestion].pergunta}</h2>

                        <div className="options-container">
                            {questoes[currentQuestion].opcoes.map((opcao, index) => {
                                const isCorrect = index === questoes[currentQuestion].respostaCorreta;
                                const isSelected = selectedAnswer === index;

                                const buttonClass = isSelected
                                    ? isCorrect
                                        ? "correct selected"
                                        : "incorrect selected"
                                    : selectedAnswer !== null && isCorrect
                                        ? "correctNotSelected"
                                        : "";

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        className={buttonClass}
                                    >
                                        {opcao}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="explanation-container">
                            <p
                                style={{
                                    color:
                                        selectedAnswer !== null
                                            ? selectedAnswer === questoes[currentQuestion].respostaCorreta
                                                ? "green"
                                                : "red"
                                            : "black",
                                }}
                            >
                                {selectedAnswer !== null
                                    ? questoes[currentQuestion].explicacaoErro[selectedAnswer]
                                    : ""}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className="credits">
                <p className="info"><strong>Professor: Diego Pasqualini</strong></p>
                <div className="popupContainer">
                    <p className="info">Acadêmicos</p>
                    <div className="popup">
                        <h4>Acadêmicos Responsáveis</h4>
                        <div className="academicsContainer">
                            {contatos.map((registro, index) => (
                                <div className="academicItem" key={index}>
                                    <h5>{registro.nome}</h5>
                                    <p>{registro.email}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="earth-container">
                <img
                    alt="terra"
                    src={imagens[indiceImagem]}
                    className="rotating-earth"
                />
            </div>
        </div>
    );
}

export default App;
