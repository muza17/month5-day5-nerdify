import {useContext} from "react";
import {LangContext} from "./../Context/LangContext";


function useLang() {

    let {lang, setLang} = useContext(LangContext);

    return(
        [lang, setLang]
    );
}
export default useLang