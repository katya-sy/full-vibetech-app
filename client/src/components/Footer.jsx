import logo from "../assets/img/logo.svg";
import "../styles/Footer.css";
import Form from "./UI/form/Form";
import tg from "../assets/img/tg.svg";
import vk from "../assets/img/vk.svg";
import youtube from "../assets/img/youtube.svg";
import { Link } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__column">
            <Link className="logo" to={SHOP_ROUTE}>
              <img src={logo} />
            </Link>
            <span className="footer__copyright">Все права защищены © 2023</span>
          </div>
          <div id="feedback" className="footer__column">
            <h3 className="footer__form-title">Нужна помощь? Пишите нам</h3>
            <Form buttonText={"Отправить"} feedbackForm />
          </div>
          <div id="contacts" className="footer__column">
            <div className="footer__social">
              <a target="_blank" href="#">
                <img src={tg} />
              </a>
              <a target="_blank" href="#">
                <img src={vk} />
              </a>
              <a target="_blank" href="#">
                <img src={youtube} />
              </a>
            </div>
            <div className="footer__contact">
              <a href="tel:+79999343434">8 (999) 934-34-34</a>
              <a href="tel:+79993494583">8 (999) 349-45-83</a>
              <a href="mailto:vibetech@gmail.com">vibetech@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
