
'use client';
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import NavBar from "@/components/navBar/NavBar";
import Services from "@/components/services/Services";
import Work from "@/components/Work/Work";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  const userTheme = localStorage.getItem('theme');
  if (
    userTheme === 'dark' ||
    (!userTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    setIsDarkMode(true);
  } else {
    setIsDarkMode(false);
  }
}, []);



  useEffect(() => {
    if(isDarkMode){
  document.body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}else{
  document.body.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

  }, [isDarkMode])

  return (
    <>
    
      <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer />
    </>
  );
}
