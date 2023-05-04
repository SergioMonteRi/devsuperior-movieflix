import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import GenericButton from "components/GenericButton";

import { requestBackendLogin } from "util/requests/requests";

import { saveAuthData } from "util/storage/storage";

import "./styles.css";
import { AuthContext } from "context/AuthContext";
import { getTokenData } from "util/auth/auth";

type FormData = {
  username: string;
  password: string;
};

const LoginCard = () => {
  const [hasError, setHasError] = useState(false);

  const history = useHistory();

  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        })
        history.push("/movies");
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);
      });
  };

  return (
    <div className="base-card login-card bg-secondary">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">Erro ao tentar efetuar o login</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username ? "is-invalid" : ""
            }`}
            placeholder="Email"
            name="username"
          />
          <div>{errors.username?.message}</div>
        </div>

        <div className="mb-2">
          <input
            {...register("password", {
              required: "Campo obrigatório",
            })}
            type="password"
            className={`form-control base-input ${
              errors.password ? "is-invalid" : ""
            }`}
            placeholder="Password"
            name="password"
          />
          <div>{errors.password?.message}</div>
        </div>

        <GenericButton text="FAZER LOGIN" />
      </form>
    </div>
  );
};

export default LoginCard;
