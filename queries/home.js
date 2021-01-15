export const fetch_result = async (
  criteria,
  program,
  points,
  uni,
  termin,
  type,
  setFunc
) => {
  let url = null;
  switch (type) {
    case "all_param":
      url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?urval=${criteria.join(
        ","
      )}&utbild=${program}&points=${points}&
      skol=${uni}&termin=${termin}`;
      break;
    case "points_left":
      url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?urval=${criteria.join(
        ","
      )}&utbild=${program}&skol=${uni}&termin=${termin}`;
      break;
    case "criteria_left":
      url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?utbild=${program}&points=${points}&skol=${uni}&termin=${termin}`;
      break;
    case "all_unis":
      url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?urval=${criteria.join(
        ","
      )}&utbild=${program}&points=${points}&termin=${termin}`;
      break;
    case "all_termins":
      url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?urval=${criteria.join(
        ","
      )}&utbild=${program}&points=${points}`;
      break;
    default:
      break;
  }

  console.log("URL = ", url);

  try {
    const res = await fetch(url);
    const data = await res.json();
    setFunc(data);
  } catch (error) {
    console.log("Error in RestApi of Main Page");
  }
};
