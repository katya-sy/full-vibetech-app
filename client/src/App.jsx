import { useContext, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";
import Modal from "./components/UI/modal/Modal";
import Form from "./components/UI/form/Form";
import { Context } from "./main";
import help from "./assets/img/help.svg";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [regModalVisible, setRegModalVisible] = useState(false);
  const { user } = useContext(Context);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
  }, [isMobile]);

  const login = () => {
    user.setIsAuth(true);
    setModalVisible(false);
    setRegModalVisible(false);
  };

  function openModal() {
    if (modalVisible) {
      setRegModalVisible(true);
      setModalVisible(false);
    } else setModalVisible(true);
  }

  return (
    <BrowserRouter>
      <Header openModal={() => openModal()} isMobile={isMobile} />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <h2 className="title form__title">Вход</h2>
        <Form buttonText={"Войти"} login={login} />
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <button
            style={{ color: "var(--accent)" }}
            onClick={() => openModal()}
          >
            Зарегистрироваться
          </button>
          <button className="help">
            <span>Нужна помощь?</span>
            <img src={help} />
          </button>
        </div>
      </Modal>
      <Modal
        modalVisible={regModalVisible}
        setModalVisible={setRegModalVisible}
      >
        <h2 className="title form__title">Регистрация</h2>
        <Form buttonText={"Войти"} registrationForm login={login} />
        <button className="help" style={{ alignSelf: "flex-end" }}>
          <span>Нужна помощь?</span>
          <img src={help} />
        </button>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
