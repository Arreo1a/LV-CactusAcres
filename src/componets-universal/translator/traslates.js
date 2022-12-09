import React,{Suspense} from 'react';
import { useTranslation } from "react-i18next";

const Welcome = () => {
    const [t,i18n] =  useTranslation(['welcome']);
    const changeToEnglish = () =>{
        i18n.changeLanguage('en');
    }
    const changeToSpanish = () =>{
        i18n.changeLanguage('es');
    }
    return(
        <div>
           <p dangerouslySetInnerHTML={{__html:t("title",{name:"Manuel"}),}} />
            <p>Idioma actual:{i18n.language}</p>
            <button onClick={changeToSpanish} >Cambiar Idioma</button>
            <button onClick={changeToEnglish} >Cambiar Idioma</button>

        </div>

    );
}


const Traslator = () => {
  
   
    return (
        <div>
            <Suspense>
                <Welcome/>
            </Suspense>
        </div>
    );
}

export default Traslator;
