import { useForm } from "react-hook-form";
import axios from "axios";
import Style from "./login.module.scss";
import { useAuth } from "../../context/auth/Auth";
import { Nav } from "../../partials/Nav";
import { Footer } from "../../partials/Footer";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginData, setLoginData } = useAuth();

  const sendLoginRequest = async (data, e) => {
    e.target.reset();
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const url = "https://api.mediehuset.net/token";
    const result = await axios.post(url, formData);
    handleSessionData(result);
  };

  const handleSessionData = (res) => {
    if (!res.message) {
      setLoginData(res.data);
      sessionStorage.setItem("token", JSON.stringify(res.data));
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
  };

  return (
    <>
      <Nav />
      {!loginData && !loginData.username ? (
        <form
          className={Style.loginform}
          onSubmit={handleSubmit(sendLoginRequest)}
        >
          <h2>Login</h2>
          <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
          <div>
            <input
              type="text"
              id="username"
              placeholder="Indtast brugernavn"
              {...register("username", { required: true })}
            />
            {errors.username && <span>Du skal udfylde dit brugernavn!</span>}
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Indtast adgangskode"
              {...register("password", { required: true })}
            />
            {errors.password && <span>Du skal udfylde din adgangskode!</span>}
          </div>
          <div className={Style.buttoncontainer}>
            <button type="submit">Login</button>
            <button type="reset">Anuller</button>
          </div>
        </form>
      ) : (
        <div className={Style.loggedin}>
          <p>
            Du er logget ind som <i>{loginData.username}</i>
          </p>
          <button onClick={logOut}>Log ud</button>
        </div>
      )}
      <Footer />
    </>
  );
};
