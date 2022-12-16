import React from "react";

function ChangeLanguageBtn(props) {
  return (
    <>
      {props.currentLanguage ? (
        <button
          className={
            props.isPhone ? "changeLanguageBtnPhone" : "changeLanguageBtn"
          }
          onClick={props.changeToEnglish}
        >
          <div className="btnText">Change to English</div>
        </button>
      ) : (
        <button
          className={
            props.isPhone ? "changeLanguageBtnPhone" : "changeLanguageBtn"
          }
          onClick={props.changeToSpanish}
        >
          <div className="btnText">Cambiar a Español</div>
        </button>
      )}
    </>
  );
}

export default ChangeLanguageBtn;
