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
import { registration, login, check } from "./http/userAPI";
import Loader from "./components/UI/loader/Loader";
import Button from "./components/UI/button/Button";
import { fetchDevices } from "./http/deviceAPI";
import { fetchBasketDevices } from "./http/basketAPI";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  const [modalVisible, setModalVisible] = useState(false);
  const [regModalVisible, setRegModalVisible] = useState(false);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const { user, device, basket } = useContext(Context);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
    fetchDevices(
      device.selectedType.id,
      1,
      device.limit,
      device.selectedOrder
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchBasketDevices(user.user.id).then((data) => {
      basket.setBasketDevices(data);
      basket.setBasketTotalCount(data.length);
    });
  }, [user.user]);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.page,
      device.limit,
      device.search,
      device.selectedSort,
      device.selectedOrder
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [
    device.page,
    device.selectedType,
    device.search,
    device.selectedSort,
    device.selectedOrder,
  ]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
  }, [isMobile]);

  const authorizateUser = (data) => {
    user.setUser(data);
    user.setIsAuth(true);
  };

  const signIn = async (name, email, password) => {
    try {
      const data = await registration(name, email, password);
      console.log(data);
      authorizateUser(data);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setRegModalVisible(false);
    }
  };

  const logIn = async (name, password) => {
    try {
      const data = await login(name, password);
      console.log(data);
      authorizateUser(data);
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setModalVisible(false);
    }
  };

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    setLogoutModalVisible(false);
    localStorage.removeItem("token");
  };

  function openModal() {
    if (user.isAuth) setLogoutModalVisible(true);
    else {
      if (modalVisible) {
        setRegModalVisible(true);
        setModalVisible(false);
      } else setModalVisible(true);
    }
  }

  if (loading) {
    return (
      <div className="loader__wrapper">
        <Loader />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Header openModal={() => openModal()} isMobile={isMobile} />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <h2 className="title modal__title">Вход</h2>
        <Form buttonText={"Войти"} login={logIn} />
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
        <h2 className="title modal__title">Регистрация</h2>
        <Form buttonText={"Войти"} registrationForm login={signIn} />
        <button className="help" style={{ alignSelf: "flex-end" }}>
          <span>Нужна помощь?</span>
          <img src={help} />
        </button>
      </Modal>
      <Modal
        modalVisible={logoutModalVisible}
        setModalVisible={setLogoutModalVisible}
      >
        <h2 className="title modal__title">Выйти?</h2>
        <Button onClick={logOut}>Да</Button>
      </Modal>
    </BrowserRouter>
  );
});

export default App;
