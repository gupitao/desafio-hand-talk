import { useState, useEffect } from 'react';

export function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const themeChanges = localStorage.getItem('themeChanges') ;

    if(!themeChanges){
      localStorage.setItem('themeChanges', '0');
    }


    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

      const countTheme = localStorage.getItem('themeChanges');
      
      if (countTheme) {
        const newCount = parseInt(countTheme, 10) + 1;

        localStorage.setItem('themeChanges', newCount.toString());
      } else {
        localStorage.setItem('themeChanges', '1');
      }
    };

    return (
      <button onClick={toggleTheme}>
         {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    );
}