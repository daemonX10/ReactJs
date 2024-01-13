import { createContext , useContext } from "react";


export const ThemeContext = createContext({
    theme: 'light',
    darkTheme:()=>{},
    lightTheme:()=>{},
});

export const ThemeProvider = ThemeContext.Provider;


// custom hook to use theme context so that we don't have to import useContext and ThemeContext again and again
export default  function useTheme(){
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
    
}
