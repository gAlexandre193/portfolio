import React, { useState, useEffect } from 'react';

function getTypingString(textArray) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentString = textArray[currentIndex];
      if (currentString) {
        if (currentText === currentString) {
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            setCurrentText('');
          }, 1000)
        } else {
          setCurrentText((prevText) => prevText + currentString[currentText.length]);
        }
      }
    }, 100); // Ajuste o tempo para controlar a velocidade da digitação

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, textArray]);

  return currentText;
}

export default getTypingString;