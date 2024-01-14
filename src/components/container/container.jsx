import style from "./container.module.css";
import Box from "../box/box";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"

function Container({quote, generate, estilo, cambiarC, backC}){
    
    const ejecutar = () =>{
        generate();
        cambiarC();
    }
    return(
        <div className={style.wrap} id="quote-box" >
            
        
        <Box quote= {quote} backC = {backC}>
        </Box>
        <div className={style.buttons}>
        <a  id= "tweet-quote" href="https://twitter.com/intent/tweet"><button className={style.twitter} style={{backgroundColor: backC, transition: "all 1s"} }><FaTwitter size="20"/></button></a>
        <button className={style.newq} id= "new-quote" style={{backgroundColor: backC, transition: "all 1s"} } onClick={() => ejecutar()} >New quote</button>
        </div>

        </div>
        
    )

}

export default Container
