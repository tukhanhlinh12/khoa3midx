import React, { useEffect, useState } from "react";
import "./assets/CSS/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetch("https://6485ce2fa795d24810b75652.mockapi.io/api/v1/array-user")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // setUser(data);
        setData(data);
      });
  }, []);

  const handleLogin = () => {
    const currentUser = data.filter((user) => {
      return user.userName === userName && user.password === password;
    });
    if (currentUser.length > 0) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      navigate("/");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div>
      <div className="login">
        <h1>Đăng nhập</h1>
        <p>Vui lòng nhập thông tin tài khoản</p>
        <hr />
        <label htmlFor="username">
          <b>Tên đăng nhập</b>
        </label>
        <input
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="Mời nhập tên tài khoản"
          name="username"
          id="username"
        />

        <label htmlFor="password">
          <b>Mật khẩu</b>
        </label>
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="******"
          name="password"
          id="password"
        />

        <hr />
        <button onClick={handleLogin} type="submit" className="submit">
          Đăng nhập
        </button>
      </div>
      <div className="register-login">
        <p>
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>.
        </p>
      </div>
    </div>
  );
};

export default Login;
