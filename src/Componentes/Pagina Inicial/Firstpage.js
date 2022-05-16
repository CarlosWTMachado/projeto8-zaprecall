import React from 'react';
import Logo from './Logo'
import Questions from '../Questions/Questions';
import '../../css/Firstpage.css';

export default function Firstpage () {
    
    const [visible, setVisible] = React.useState(true);

    return visible ?  (

        <div className="first-page">
            <Logo/>
            <section className="start-button" onClick={() => setVisible(false)}>
                <button type="button" className="begin-recall">Iniciar Recall!</button>
            </section>
        </div>
        
    ) : (
        <>
            <Questions/>
        </>
    );
} 