import React, { memo, useState, useEffect } from "react";
import Links from "../../components/Links/Links";
import { useLocation} from "react-router-dom";
import axios from "axios";
import { Navbar, Row} from "reactstrap";

const Fruta = memo(() => {
  const location = useLocation();
  const [detalles, setDetalles] = useState({});

  useEffect(() => {
    const getfruitDetails = () => {
      const url = location.state.berry_url;
      axios({
        method: "get",
        url,
        responseType: "stream",
      })
        .then((res) => {
          setDetalles(res.data);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getfruitDetails();
  }, []);

  return (
    <div>
      <Links/>

      <div> DETALLES DE LA FRUTA:</div>
      <Row>
        <Navbar color="light" light expand="md">
          Id: {detalles.id}
          <br />
          Nombre: {detalles.name}
          <br />
          Cosecha Maxima: {detalles.max_harvest}
          <br />
          Tiempo De Crecimiento: {detalles.growth_time}
          <br/>
          Costo De La Fruta: {"---"}
          <br/>
          Categoria De La Fruta: {"---"}
          <br />
          Efectos De La Fruta: {detalles.effect}
          <br />
          Imagen De La Fruta sprites: {detalles.sprites}
          <br />
        </Navbar>
      </Row>
    </div>
  )
});

export default Fruta;
