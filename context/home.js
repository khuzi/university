import React, { useState, createContext, useEffect } from "react";

export const HomeContext = createContext();

export default function Home({ children }) {
  const [city, setCity] = useState();
  const [program, setProgram] = useState();
  const [points, setPoints] = useState();
  const [university, setUniversity] = useState([]);
  const [criteria, setCriteria] = useState();
  const [termins, setTermins] = useState();

  useEffect(() => {
    console.log(university, city);
  }, [university, city]);

  return (
    <HomeContext.Provider
      value={{
        university,
        program,
        points,
        termins,
        criteria,
        city,
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
