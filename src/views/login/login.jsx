import React, { memo } from "react";

const login = memo(() => {
  return (
    <form>
      <h3>INICIAR SESION</h3>

      <div className="mb-3">
        <label>Correo Electrónico</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Recordar
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </div>
      <p className="forgot-password text-right">
        Olvidaste <a href="/Fruta">la contraseña?</a>
      </p>
    </form>
  );
});

export default login;
