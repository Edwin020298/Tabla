import React, { memo, useState, useEffect } from "react";
import { Container, Table, Row } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Links from "../../components/Links/Links";


const Home = memo(() => {
  const [berris, setBerris] = useState([]);
  const [berrisPagInfo, setBerrisPagInfo] = useState([]);
  const [paginationNumber, setPaginationNumber] = useState([]);
  const [pag, setPag] = useState(0);

  useEffect(() => {
    const getBerrys = async () => {
      let url = `https://pokeapi.co/api/v2/berry/?offset=${pag * 20}&limit=20`;
      axios({
        method: "get",
        url,
        responseType: "stream",
      })
        .then((res) => {
          const totalElementos = res.data.count;
          const Totalpages = totalElementos / 20;
          console.log(res);
          setBerris(res.data.results);
          setBerrisPagInfo(res.data);
          let pages = [];
          for (let x = 0; x < Totalpages; x++) {
            pages.push(x + 1);
          }
          setPaginationNumber(pages);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getBerrys();
  }, [pag]);

  const renderBerries = berris.map((berry, key) => {
    return (
      <tr key={key}>
        <td>{key + pag * 20}</td>
        <td>{berry.name}</td>
        <td>
          <Link
            to={{
              pathname: `${berry.name}`,
              state: { berry_url: berry.url },
            }}
          >
            ver {berry.name} detalles
          </Link>
        </td>
      </tr>
    );
  });

  const handlepage = (type) => {
    if (type === "next") {
      setPag(pag + 1);
    } else {
      setPag(pag - 1);
    }
  };

  return (
    <div>
      <Links/>

      <Container>
        <br></br>
        <br></br>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>FRUTA</th>
                <th>HIPERVINCULO</th>
              </tr>
            </thead>

            <tbody>{renderBerries}</tbody>
          </Table>
        </Row>

        <nav aria-label="Page navigation dark">
          <ul class="pagination justify-content-center">
            {berrisPagInfo.previous && (
              <li class="page-item disabled">
                <span onClick={() => handlepage("previous")}> previous </span>
              </li>
            )}
            {paginationNumber.map((res, key) => {
              return (
                <li
                  onClick={(_) => setPag(res - 1)}
                  key={`${key}-pag`}
                  class="page-item"
                >
                  <a class="page-link" href="#">
                    {res}
                  </a>
                </li>
              );
            })}

            {berrisPagInfo.next && (
              <li class="page-item">
                <span onClick={() => handlepage("next")}>Next</span>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
});

export default Home;
