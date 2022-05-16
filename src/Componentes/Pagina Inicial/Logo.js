import logo from '../../images/logo.png';

export default function Logo(){
    return(
        <div className="zap-container">
            <div className="zap-big-logo">
                <img src={logo} className="first-logo" alt="ZapRecall Logo" height={161} width={136}/>
            </div>
            <div className="zap-name">
                <p className="zap-recall-name">ZapRecall</p>
            </div>
        </div>
    );
}