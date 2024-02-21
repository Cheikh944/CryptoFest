import Axios from "../Api/Axios";

const FetchCoinList = async () => {
  try {
    const response = await Axios.get(
      "coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=30d&locale=fr&x_cg_demo_api_key=CG-LbRHoTvAKX7BQDAPJhyeiRHr"
    );
    return { response };
  } catch (error) {
    console.error("Erreur lors de la requête" + error);
    return error;
  }
};

export default FetchCoinList;
