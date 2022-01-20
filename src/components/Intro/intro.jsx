import useLang from "./../../Hooks/useLang"
import useTheme from "./../../Hooks/useTheme"
import Content from "./../../Localization/Content"
import "./intro.css"

function Intro() {

    const [theme, setTheme] = useTheme()
    const [lang, setlang] = useLang()
    console.log(theme);
    return(
        <section className="intro">
            <section className={theme}>
                <div className="container">
                    <div className="intro-left">
                        <h1 className="intro-heading">{Content[lang].intro.heading}</h1>
                        <p className="intro-text">{Content[lang].intro.text1}</p>
                        <p className="intro-text">{Content[lang].intro.text2}</p>
                        <button>{Content[lang].intro.button}</button>
                    </div>
                    <div className="intro-right">

                    </div>
                </div>
                
            </section>
        </section>
    ); 
    
}
export default Intro