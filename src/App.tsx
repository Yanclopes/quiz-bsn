import { useState } from "react";
import { questoes } from "./store/questoes.ts";
import "./App.css";
import terra_1 from "./assets/limpo.png";
import terra_2 from "./assets/poluicao.png";

const imagens = [terra_1, terra_2];

function App() {
    const [errorCount, setErrorCount] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // Para armazenar a resposta selecionada
    const totalQuestoes = questoes.length;
    const totalImagens = imagens.length;

    const indiceImagem = Math.min(Math.floor((errorCount / totalQuestoes) * totalImagens), totalImagens - 1);

    function handleAnswer(optionIndex: number) {
        setSelectedAnswer(optionIndex);

        if (optionIndex !== questoes[currentQuestion].respostaCorreta) {
            setErrorCount(errorCount + 1);
        }

        setTimeout(() => {
            if (currentQuestion < totalQuestoes - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
            }
        }, 2000);
    }

    return (
        <div className="quiz-container">
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
            </div>
            <div className="earth-container">
                <img alt="terra" src={imagens[indiceImagem]} className="rotating-earth" />
            </div>
        </div>
    );
}

export default App;
