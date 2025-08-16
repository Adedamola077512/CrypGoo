import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import { SiLitecoin, SiBitcoincash } from "react-icons/si";
import "./CryptoSwiper.css";

// Import Swiper styles
import "swiper/css";

// Crypto card data
const cryptoData = [
  {
    name: "Bitcoin",
    pair: "BTC/USD",
    icon: <FaBitcoin size={28} color="#f7931a" />,
    current: "$93,291.24",
    previous: "$94,040.99",
    change: "-0.9%",
  },
  {
    name: "Ethereum",
    pair: "ETH/USD",
    icon: <FaEthereum size={28} color="#a0a0a0" />,
    current: "$3,128.84",
    previous: "$4,878.26",
    change: "-35.9%",
  },
  {
    name: "Bitcoin Cash",
    pair: "BTC/USD",
    icon: <SiBitcoincash size={28} color="#f7931a" />,
    current: "$443.27",
    previous: "$3,785.82",
    change: "-88.3%",
  },
  {
    name: "Litecoin",
    pair: "LTC/USD",
    icon: <SiLitecoin size={28} color="#bebebe" />,
    current: "$86.11",
    previous: "$410.26",
    change: "-79.1%",
  },
];

const CryptoSwiper = () => {
  return (
    <div
      style={{
        backgroundColor: "#060c17",
        padding: "20px 0",
      }}
    >
      <div  style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cryptoData.map((coin, index) => (
            <SwiperSlide key={index}>
              <div
              className="crypto-card"
                style={{
                  backgroundColor: "#1c1c1f",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  color: "white",
                  fontFamily: "sans-serif",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "130px",
                  boxShadow: "0 0 0 1px #2e2e30",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#2a2a2e",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {coin.icon}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontWeight: "600", fontSize: "15px" }}>{coin.name}</span>
                    <span style={{ fontSize: "12px", color: "#888" }}>{coin.pair}</span>
                  </div>
                </div>

                <div style={{ marginTop: "10px" }}>
                  <div style={{ fontSize: "18px", fontWeight: "bold" }}>{coin.current}</div>
                  <div style={{ color: "#f15151", fontSize: "13px", marginTop: "4px" }}>
                    {coin.previous} ({coin.change})
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CryptoSwiper;
