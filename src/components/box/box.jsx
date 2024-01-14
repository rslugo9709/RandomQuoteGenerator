import style from "./box.module.css";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

function Box({quote, backC}){

    //console.log("Se imprime desde el cuadro de texto")
    //console.log(quote)
    return(
        <div id="text" className={style.text}>
            <FaQuoteLeft style={{color: backC, transition: "all 1s"} } size="30" /><p style={{color: backC}}>{quote.quote}</p><FaQuoteRight style={{color: backC, transition: "all 1s"}} size="30"/>
            <h4 id="author" style={{color: backC, transition: "all 1s"}}>-|-<i>{quote.author}</i>-|-</h4>
        </div>

    )

}


export default Box; 

