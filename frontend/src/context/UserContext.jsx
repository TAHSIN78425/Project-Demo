// context/UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState('');
    
    // Form states that need to be cleared on logout
    const [image, setImage] = useState(null);
  
    const [text, setText] = useState('');
    const [textType, setTextType] = useState('');
    const [languageOut, setLanguageOut] = useState('');
    const [languageIn, setLanguageIn] = useState('');
    const [language, setLanguage] = useState('');
    const [inputLanguage, setInputLanguage] = useState('auto');
    const [selectedTextType, setSelectedTextType] = useState('auto');
    const [lineSeparation, setLineSeparation] = useState('auto');
    const [translation, setTranslation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [error, setError] = useState(null);

    const checkAuth = async () => {
        const res = await fetch('http://localhost:5000/api/status', {
            credentials: 'include',
        });
        const data = await res.json();
        setLoggedIn(data.logged_in);
        if (data.logged_in) {
            setName(data.name);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const clearAllForms = () => {
        setImage(null);
        setText('');
        setTextType('');
        setLanguageOut('');
        setLanguageIn('');
        setLanguage('');
        setInputLanguage('auto');
        setSelectedTextType('auto');
        setLineSeparation('auto');
        setTranslation(null);
        setLoading(false);
        setUploaded(false);
        setError(null);
        setTranslationModel(null);
    };

    const logout = async () => {
        await fetch('http://localhost:5000/api/logout', {
            method: 'POST',
            credentials: 'include',
        });
        setLoggedIn(false);
        setName('');
        // Clear all form states
        clearAllForms();
    };

    return (
        <UserContext.Provider value={{ 
            loggedIn, 
            setLoggedIn, 
            name, 
            setName, 
            logout,
            clearAllForms,
            // Form states and setters
            image, setImage,
            text, setText,
            textType, setTextType,
            languageOut, setLanguageOut,
            languageIn, setLanguageIn,
            language, setLanguage,
            inputLanguage, setInputLanguage,
            selectedTextType, setSelectedTextType,
            lineSeparation, setLineSeparation,
            translation, setTranslation,
            loading, setLoading,
            uploaded, setUploaded,
            error, setError,
           
        }}>
            {children}
        </UserContext.Provider>
    );
};