export const fetch_result = async (
  criteria,
  program,
  points,
  uni,
  termin,
  setFunc,
  unis_cities
) => {
  localStorage.clear();

  criteria && localStorage.setItem("cl", criteria);
  program && localStorage.setItem("prl", program);
  points && localStorage.setItem("pol", points);
  uni && localStorage.setItem("unil", uni);
  termin && localStorage.setItem("terminl", termin);

  const url = `https://arvin-project.herokuapp.com/api/v1/resources/multi_choice?${
    criteria ? `urval=${criteria}` : ""
  }&utbild=${program}${points ? `&points=${points}` : ""}${
    uni ? `&skol=${uni}` : ""
  }${termin ? `&termin=${termin}` : ""}`;

  console.log("LocalStorage = ", localStorage);
  console.log("URL = ", url);

  try {
    const res = await fetch(url);
    let data = [];
    data = await res.json();

    const codes = data.map((arr) => arr["Program Code"]);
    const filter_codes = [...new Set(codes)];

    const final_data = [];
    filter_codes.forEach((item) => {
      let temp = data.filter((inner_item) => {
        return inner_item["Program Code"] === item;
      });
      if (temp.length > 0) {
        let city = null;
        unis_cities.forEach((uc) => {
          if (uc["School Name"] === temp[0].University) {
            city = uc.City;
          }
        });

        final_data.push([...temp, city]);
      }
      temp = [];
    });
    setFunc(final_data);
    window.scrollTo(0, document.body.scrollHeight);
  } catch (error) {
    console.log("Error in RestApi of Main Page");
    setFunc([]);
    alert("Results Not Found");
  }
};
