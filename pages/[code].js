import React from "react";

import { MetaInfo } from "../components";

import styles from "../styles/resultInfo.module.css";

export default function ResultInfo({ cityData, historyData }) {
  return (
    <>
      <MetaInfo title="ResultInfo" />
      <div className={styles.result_info}>
        {cityData ? (
          <>
            <div className={styles.txt}>
              <h3>City Name:</h3>
              <p>{cityData["City Name"]}</p>
            </div>
            <div className={styles.txt}>
              <h3>City Information:</h3>
              <p>{cityData["City Info"]}</p>
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.txt}>
                <h3>Housing Data Index:</h3>
                <p>{cityData["Housing Index"]}</p>
              </div>
              <div className={styles.txt}>
                <h3>Cost of Living Index:</h3>
                <p>{cityData["Cost Index"]}</p>
              </div>
            </div>
          </>
        ) : (
          <h3 style={{ margin: "1rem 0", textAlign: "center" }}>
            City Data Comming Soon.
          </h3>
        )}
        {historyData?.reverse().map(({ Termin, Urvalsgrupp_lista }, i) => (
          <div className={styles.table} key={i}>
            <table>
              <tr>
                <th>Termin</th>
                <th>Urvalsgrupp</th>
                <th>Score</th>
              </tr>
              {Urvalsgrupp_lista?.map(({ Urvalsgrupp, Points }, i) => (
                <tr key={i}>
                  <td>{Termin}</td>
                  <td>{Urvalsgrupp}</td>
                  <td>{Points}</td>
                </tr>
              ))}
            </table>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps({ query, params }) {
  const { code } = query || params;

  const route = code.split("_");
  const city = encodeURIComponent(route[0]);
  const program_code = route[1];

  let cityData = null;
  let historyData = null;

  try {
    const res1 = await fetch(
      `https://arvin-project.herokuapp.com/api/v1/resources/city?city=${city}`
    );
    cityData = await res1.json();
  } catch (error) {
    console.log("Error in CityData");
  }

  try {
    const res2 = await fetch(
      `https://arvin-project.herokuapp.com/api/v1/resources/history?utbild=${program_code}`
    );
    historyData = await res2.json();
  } catch (error) {
    console.log("Error in HistoryData");
  }

  return {
    props: {
      cityData,
      historyData,
    },
  };
}
