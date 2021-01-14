export const uni_dropdown = async (setFunc) => {
  try {
    const res = await fetch(
      "https://arvin-project.herokuapp.com/api/v1/resources/university?univer=all"
    );
    const data = await res.json();
    setFunc(data);
  } catch (error) {
    console.log("Error in University Dropdown");
  }
};

export const all_param_fetch = async (
  criteria,
  program,
  points,
  uni,
  termin,
  setFunc
) => {
  try {
    const url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?urval=${criteria.join(
      ","
    )}&utbild=${program}&points=${points}&skol=${uni}&termin=${termin}`;
    const res = await fetch(url);
    const data = await res.json();
    setFunc(data);
    console.log("Url = ", url);
  } catch (error) {
    console.log("Error in AllParamFetch = ", error);
  }
};

export const point_param_empty = async (
  criteria,
  program,
  uni,
  termin,
  setFunc
) => {
  try {
    const url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?urval=${criteria.join(
      ","
    )}&utbild=${program}&skol=${uni}&termin=${termin}`;
    const res = await fetch(url);
    const data = await res.json();
    setFunc(data);
    console.log("Url = ", url);
  } catch (error) {
    console.log("Error in PointParamLeft = ", error);
  }
};

export const criteria_param_empty = async (
  city,
  program,
  points,
  uni,
  termin,
  setFunc
) => {
  try {
    const url = `https://arvin-project.herokuapp.com/api/v1/resources/city?city=${city}/api/v1/resources/multi_choice?utbild=${program}&points=${points}&skol=${uni}&termin=${termin}`;
    const res = await fetch(url);
    const data = await res.json();
    setFunc(data);
    console.log("Url = ", url);
  } catch (error) {
    console.log("CiteriaParamEmpty = ", error);
  }
};

export const all_schools = async (
  city,
  criteria,
  program,
  points,
  termins,
  setFunc
) => {
  try {
    const url = `https://arvin-project.herokuapp.com/api/v1/resources/city?city=${city}/api/v1/resources/multi_choice?urval=${criteria.join(
      ","
    )}&utbild=${program}&points=${points}&termin=${termins}`;
    const res = await fetch(url);
    const data = await res.json();
    setFunc(data);
  } catch (error) {
    console.log("Error in AllSchools = ", error);
  }
};

export const all_termins = async (city, criteria, program, points, setFunc) => {
  try {
    const url = `https://arvin-project.herokuapp.com/api/v1/resources/city?city=${city}/api/v1/resources/multi_choice?urval=${criteria.join(
      ","
    )}&utbild=${program}&points=${points}`;
    const res = await fetch(url);
    const data = await res.json();
    setFunc(data);
  } catch (error) {
    console.log("Error in AllTermins = ", error);
  }
};
