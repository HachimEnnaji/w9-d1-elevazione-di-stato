import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";
import SingleComment from "./components/SingleComment";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <Row>
          <Col xs={6}>
            <BookList books={fantasy} />
          </Col>
          <Col xs={6}>
            <SingleComment />
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
