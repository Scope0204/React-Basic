import { useEffect, useState } from "react";

const Coin = () => {
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoding(false);
      });
  }, []);

  const [loding, setLoding] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coin, setCoin] = useState(1);
  const coinChange = (event) => {
    setCoin(event.target.value);
    console.log(coin);
  };
  const [price, setPrice] = useState("");
  const inputChange = (event) => {
    setPrice(event.target.value);
    console.log(price);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>코인정보</h1>
      {loding ? (
        "로딩중"
      ) : (
        <div>
          <p>코인갯수: {coins.length}</p>
          <div>
            <select onChange={coinChange}>
              {coins.map((main, idx) => (
                <option key={idx} id={main.id} value={main.quotes.USD.price}>
                  {main.name}({main.symbol}){main.quotes.USD.price}
                </option>
              ))}
            </select>
            <ul
              style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "space-around",
              }}
            >
              <li>
                <label htmlFor="choice">내가 선택한 코인 가격</label>
                <input
                  id="choice"
                  type="number"
                  style={{ marginLeft: "5px" }}
                  value={coin}
                  onChange={coinChange}
                />
                <span style={{ marginLeft: "5px" }}>달러</span>
              </li>
              <li>
                <label htmlFor="price">나의 자본금</label>
                <input
                  id="price"
                  type="number"
                  style={{ marginLeft: "5px" }}
                  value={price}
                  onChange={inputChange}
                  placeholder="달러"
                />
                <span style={{ marginLeft: "5px" }}>달러</span>
              </li>
            </ul>
          </div>
          <span>내가 살수 있는 코인 갯수 : {price / coin}</span>
        </div>
      )}
    </div>
  );
};

export default Coin;
