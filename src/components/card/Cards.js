import React from 'react';

import CountUp from 'react-countup';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Cards({ confirmed, recovered, death, lastUpdate }) {
  if (!death) {
    return 'loading...'
  }
  return (
    <div className="Card">
      <Container >
        <Row className="d-flex flex-row justify-content-center mr-auto ml-auto" >
          <Col sm="12" md="12" lg="3" >
            <div >
              <Card className="custom rounded bg-warning text-white " body style={{ borderBottom: "10px solid yellow" }}>
                <CardText><b>Infected</b></CardText>
                <CardTitle><b>
                  <CountUp
                    start={0}
                    end={confirmed}
                    duration={2.5}
                    separator=","
                  /></b>
                </CardTitle>
                <CardText>Last Updated: <b>{new Date(lastUpdate).toDateString()}</b></CardText>
                <CardText><b>Number of active cases of COVID-19</b></CardText>
              </Card>
            </div>
          </Col>
          <Col sm="12" md="12" lg="3" >
            <div  >
              <Card className="custom rounded bg-success  text-white" body style={{ borderBottom: "10px solid green" }}>
                <CardText><b>Recovered</b></CardText>
                <CardTitle><b>
                  <CountUp
                    start={0}
                    end={recovered}
                    duration={2.5}
                    separator=","
                  /></b>
                </CardTitle>
                <CardText>Last Updated: <b>{new Date(lastUpdate).toDateString()}</b></CardText>
                <CardText><b>Number of recoveries from COVID-19</b></CardText>
              </Card>
            </div>
          </Col>
          <Col sm="12" md="12" lg="3">
            <div>
              <Card className="custom rounded bg-danger text-white" body style={{ borderBottom: "10px solid red" }}>
                <CardText><b>Deaths</b></CardText>
                <CardTitle><b>
                  <CountUp
                    start={0}
                    end={death}
                    duration={2.5}
                    separator=","
                  /></b>
                </CardTitle>
                <CardText>Last Updated: <b>{new Date(lastUpdate).toDateString()}</b></CardText>
                <CardText><b>Number of deaths caused by COVID-19</b></CardText>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Cards
