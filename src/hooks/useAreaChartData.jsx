import Axios from "../Api/Axios";
import moment from "moment";

const getDataAreaChart = async (param) => {
  try {
    const response = await Axios.get(param);
    const coinData = response?.data.prices.map((val) => ({
        date: moment(val[0]).format("MMMDD"),
        y: val[1].toFixed(2),
      }));
      let coinMin = coinData[0].y;
      let coinMax = 0;
      for (let i = 0; i < coinData.length; i++) {
        if (coinData[i].y < coinMin) {
          coinMin = coinData[i].y;
        } else if (coinData[i].y > coinMax) {
          coinMax = coinData[i].y;
        }
      }
    return {coinData, coinMin, coinMax}
  } catch (error) {
    return error
  }
};

export default getDataAreaChart;
