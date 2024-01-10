import "../styles/Promo.css";
import promoImg from "../assets/img/promo.png";

function Promo() {
  return (
    <div className="promo">
      <img src={promoImg} alt="Акция" />
      <h2>Скидки до 40%</h2>
      <h2>на всю кухонную технику!</h2>
    </div>
  );
}

export default Promo;
