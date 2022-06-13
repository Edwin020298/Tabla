import React, { memo } from "react";

const signup = memo(() => {
  return (
    <form>
      <h3>REGISTRO</h3>

      <div className="mb-3">
        <label>Nombre</label>
        <input type="text" className="form-control" placeholder="Nombre" />
      </div>

      <div className="mb-3">
        <label>Apellido</label>
        <input type="text" className="form-control" placeholder="Apellido" />
      </div>

      <div className="mb-3">
        <label>Correo Electrónico</label>
        <input type="email" className="form-control" placeholder="Correo" />
      </div>

      <div className="mb-3">
        <label>Contraseña</label>
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Registrarme
        </button>
      </div>
      <p className="forgot-password text-right">
        ya estas <a href="/sign-in">registrado?</a>
      </p>
    </form>
  );
});
export default signup;
