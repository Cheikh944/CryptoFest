import Axios from "../Api/Axios";
import moment from "moment";

const getDataBarChart = async (param) => {
  try {
    const response = await Axios.get(param);
    const data = response?.data.prices;
    const result = [];
    let barMin = data[259][1];
    let barMax = 0;
    for (let i = 260; i < data.length; i = i + 1) {
      if(data[i][1] > barMax){
        barMax = data[i][1];
      } else if(data[i][1] < barMin){
        barMin = data[i][1];
      }
      let price = {};
      price = {
        "day": moment(data[i][0]).format("MMMDD"),
        "price": [
          data[i - 1][1],
          data[i][1]
        ],
        "fill": data[i][1] > data[i - 1][1] ? "green" : "red"
      }
      result.push(price);
    }
    return {result, barMin, barMax}
  } catch (error) {
    return error
  }
};

export default getDataBarChart;
