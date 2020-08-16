import React from "react";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import QueryRadios from "./QueryRadios";
import SearchBar from "./SearchBar";
import SubmitButton from "./SubmitButton";
import SongCatalogue from "./SongCatalogue";

const Layout = ({
  data,
  getQuery,
  getData,
  getQueryType,
  queryFeedback,
  status,
}) => {
  // Grid dimensions
  const col1Width = 3;
  const col2Width = 6;
  const col3Width = 1;

  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <QueryRadios getQueryType={getQueryType} />
          </Col>
        </Row>
        <Row className="query-container">
          <Col xs={col1Width} />
          <Col xs={col2Width}>
            <SearchBar
              getData={getData}
              getQuery={getQuery}
              queryFeedback={queryFeedback}
            />
          </Col>
          <Col xs={col3Width}>
            <SubmitButton getData={getData} getQuery={getQuery}>
              Submit
            </SubmitButton>
          </Col>
        </Row>
        <Row>
          <Col xs={col1Width} />
          <Col xs={col2Width}>
            <SongCatalogue data={data} status={status} />
          </Col>
          <Col xs={col3Width} />
        </Row>
      </Container>
    </>
  );
};

export default Layout;
