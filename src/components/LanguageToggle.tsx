import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/nav-translation-toggle.css'; 

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'pt' : 'en';
    console.log('Changing language to:', newLang);
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <div className="switch-container" data-language={language}>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleLanguage}
          checked={language === 'en'}
        />
        <span className="slider round">
          <span className="slider-text">
            {language === 'en' ? 'en' : 'pt'}
          </span>
        </span>
      </label>
    </div>
  );
}
