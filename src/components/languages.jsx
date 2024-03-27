import React from "react";

const Languages = ({onLanguageSelect,selectedLanguage}) => {
    const languages = [
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'ta', name: 'Tamil' },
        { code: 'ml', name: 'Malayalam' },
        { code: 'la', name: 'Latin' },
        { code: 'ar', name: 'Arabic' },
        { code: 'ja', name: 'Japanese' },
        { code: 'ko', name: 'Korean' },
      ];
    return(
        <div>
            <label htmlFor="languageSelect"><b>Select Language</b></label><br/><br/>
            {languages.map((lang, index) => (
                <React.Fragment key={lang.code}>
                <button id="language_button" 
                key={lang.code}
                onClick={() => onLanguageSelect(lang.code)}
                style={{ marginRight: '20px', marginBottom: '10px' }}
                className={selectedLanguage === lang.code ? 'selected' : ''}
                >
                <img className='flag' src={`/images/${lang.code}.png`}></img>
                {lang.name}
                </button>
                {(index + 1) % 3 === 0 && <br />}
                </React.Fragment>
      ))}
        </div>
    );
};

export default Languages;