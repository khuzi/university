import React, { useState, createContext, useEffect } from "react";

export const HomeContext = createContext();

export default function Home({ children }) {
  const [allOneData, setAllOneData] = useState([]);

  const [city, setCity] = useState();
  const [program, setProgram] = useState();
  const [points, setPoints] = useState();
  const [university, setUniversity] = useState([]);
  const [criteria, setCriteria] = useState();
  const [termins, setTermins] = useState();

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(
          "https://arvin-project.herokuapp.com/api/v1/resources/university?univer=all"
        );
        const data = await res.json();
        setAllOneData(data);
      } catch (error) {
        console.log("Error in University Dropdown");
      }
    };
    fetcher();
  }, []);

  useEffect(() => {
    console.log(program, criteria, points, termins, university, city);
  }, [program, criteria, university, points, termins, city]);

  return (
    <HomeContext.Provider
      value={{
        allOneData,
        university,
        setProgram,
        setPoints,
        setUniversity,
        setCriteria,
        setTermins,
        setCity,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
