import axios from "axios";
const url = "http://localhost:3001";
export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
export const fetchDailyData = async () => {
  try {
    const { res } = await axios.get(`${url}/budget`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};