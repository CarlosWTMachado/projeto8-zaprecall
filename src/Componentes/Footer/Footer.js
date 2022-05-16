import React from "react";
import happy from "../../images/party.png";
import sad from "../../images/sad.png";

export default function Footer (props) {

    const toBePlayed = props.cardData.filter(item => item.status !== '').length;
    const isAnyWrong = props.cardData.filter(wrong => wrong.status === 'incorrect').length;

    return toBePlayed < 4 ? (

        <div className="footer-counter">{toBePlayed}/4 CONCLUÍDOS</div>
    
    ) : (
        isAnyWrong > 0 ? (
            <>
                <div className="final-result">
                    <img src={sad} alt="bad-ending" width={23} height={23}/>
                    <span className="sad-span">Puts...</span>
                </div>
                <p className="sad-text">Ainda faltam alguns...<br/>Mas, não desanime!</p>
                <div className="footer-counter">{toBePlayed}/4 CONCLUÍDOS</div>
            </>
        ) : (
            <>
                <div className="final-result">
                    <img src={happy} alt="happy-ending" width={23} height={23}/>
                    <span className="happy-span">Parabéns!</span>
                </div>
                <p className="happy-text">Você não esqueceu de<br/>nenhum flashcard!</p>
                <div className="footer-counter">{toBePlayed}/4 CONCLUÍDOS</div>
            </>
        )
    );
}