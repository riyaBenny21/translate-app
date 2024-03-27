import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";
import axios from "axios";
import "./App.css";

<style>
@import url('https://fonts.googleapis.com/css2?family=Single+Day&display=swap')
</style> 

export default function App() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('es');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async() => {
    try {
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language,
            key: 'YOUR_API_KEY', // Replace with your Google Translate API key
          },
        }
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <div className="translate-app">
      
      <div className="translate-content">
      <div>
        <h1>Translate App</h1>
      </div>
        <Field value={text} onChange={(e) => setText(e.target.value)}/><br/>
        <Languages
          selectedLanguage={language}
          setLanguage={language}
          onLanguageSelect={(lang) => setLanguage(lang)}
        /><br/>
        <hr/><br/>
        <Translate
          text={text}
          language={language}
          translatedText={translatedText}
          onTranslate={handleTranslate}
        />
      </div>
    </div>
  );
}
