import { useState} from "react";
import "./header.css"
import useTheme from "./../../Hooks/useTheme"
import useLang from "./../../Hooks/useLang"
import logo from "./../../assets/nerdify-logo.svg"
import Content from "./../../Localization/Content"

function Header() {

    const[ theme, setTheme] = useTheme()
    const[lang, setLang] = useLang()

    //function
    const changeTheme = (e) => {
        setTheme(e.target.value);
    }
   
    return(
        <>
            <header className={theme}>
                <div className="container">
                    <img src={logo}></img>
                    <div className="header-right">
                        <ul className="header-list">
                            <li className="item">{Content[lang].header.listItem1}</li>
                            <li className="item">{Content[lang].header.listItem2}</li>
                            <li className="item">{Content[lang].header.listItem3}</li>
                        </ul>
                        <select className="select" defaultValue={theme} onChange={(e) => changeTheme(e)}>
                            <option value="light">{Content[lang].header.theme1}</option>
                            <option value="dark">{Content[lang].header.theme2}</option>
                        </select>
                        <select className="select" defaultValue={lang} onChange={ (e) =>  setLang(e.target.value)}>
                            <option value="uz">{Content[lang].header.lang1}</option>
                            <option value="ru">{Content[lang].header.lang2}</option>
                            <option value="en">{Content[lang].header.lang3}</option>
                        </select>

                    </div>
                </div>
            </header>
        </>
    );
    
}
export default Header