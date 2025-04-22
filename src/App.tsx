import { useState, useEffect } from "react";
import { questoes } from "./store/questoes.ts";
import "./App.css";
import terra_1 from "./assets/high.png";
import terra_2 from "./assets/mid.png";
import terra_3 from "./assets/low.png";
import logo from "./assets/logo.png";
import { getOrCreateUserId } from "./utils/getOrCreateUserId.ts";
import { getCookie, setCookie } from "./utils/cookieUtils.ts";

const imagens = [terra_1, terra_2, terra_3];

function App() {
    const totalQuestoes = questoes.length;
    const totalImagens = imagens.length;

    const [errorCount, setErrorCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

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

        fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                question: currentQuestion,
                response: optionIndex,
                isCorrect
            })
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

    return (
        <div className="quiz-container">
            <img className="logo" alt="Unidavi" src={logo} />
            {currentQuestion >= totalQuestoes && (
                <h2>Fim de jogo, você acertou um total de {totalQuestoes - errorCount}</h2>
            )}

            {currentQuestion < totalQuestoes && (
                <div className="quiz">
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
                                            ? "Green"
                                            : "Red"
                                        : "black"
                            }}
                        >
                            {selectedAnswer !== null
                                ? questoes[currentQuestion].explicacaoErro[selectedAnswer]
                                : ""}
                        </p>
                    </div>
                </div>
            )}

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
