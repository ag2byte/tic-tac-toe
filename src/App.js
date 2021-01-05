import React, { useState } from "react";

import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";
// import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [wMessage, setWMessage] = useState("");
  const reloadGame = () => {
    setIsCross(false);
    setWMessage("");
    itemArray.fill("empty", 0, 9);
  };
  const changeIcon = (index) => {
    if (wMessage) return toast(wMessage, { type: "success" });
    if (itemArray[index] === "empty") {
      itemArray[index] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else return toast("ALREADY FILLED", { type: "warning" });

    checkWinner();
  };
  const checkWinner = () => {
    const ar = [0, 3, 6];
    const ar2 = [0, 1, 2];
    ar.forEach((e) => {
      if (itemArray[e] != "empty") {
        if (
          itemArray[e] === itemArray[e + 1] &&
          itemArray[e] === itemArray[e + 2]
        )
          // horizontal
          setWMessage(`${itemArray[e]} WINS`);
      }
    });
    ar2.forEach((e) => {
      if (
        itemArray[e] != "empty" &&
        itemArray[e] === itemArray[e + 3] &&
        itemArray[e] === itemArray[e + 6]
      )
        //vertical
        setWMessage(`${itemArray[e]} WINS`);
    });

    //diagonals
    if (
      itemArray[0] != "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[0] == itemArray[8]
    )
      setWMessage(`${itemArray[0]} WINS`);
    if (
      itemArray[2] != "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[2] == itemArray[6]
    )
      setWMessage(`${itemArray[2]} WINS`);
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {wMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {wMessage.toUpperCase()}
              </h1>
              <Button
                outline
                color="success"
                size="lg"
                block
                onClick={reloadGame}
              >
                RELOAD
              </Button>

              {/* <Button color="success" block /> */}
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? `Cross's turn` : `Circle's turn`}
            </h1>
          )}

          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeIcon(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      {/* <Card className="Reload">
        <CardBody onClick={reloadGame}>RELOAD</CardBody>
      </Card> */}
    </Container>
  );
};

export default App;
