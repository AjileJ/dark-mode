import {useLocalStorage} from './useLocalStorage';
import React, {useEffect,useState} from 'react';


export const useDarkMode = (initialValue) => {
  const [darkMode,setDarkMode] = useLocalStorage('dark-Mode',initialValue);

  useEffect(()=> {
    darkMode === true ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');  
  })
  return [darkMode, setDarkMode];
}