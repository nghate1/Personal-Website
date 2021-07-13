import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './Components/Header';
import Cards from './Components/Cards';

import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <Container fluid>
      <Header/>
      <hr/>
      <Container className = 'section'>
            <Row>
                <Col  xs={3} className="subTitle">
                  About Me
                </Col>
                <Col  xs={9}>
                  I am a Computer Science + Finance student at the University of Maryland-College Park. 
                  Currently seeking Software Engineering Internship for Summer of 2021. 
                </Col>
            </Row>
      </Container>
      <Container className = 'section'>
            <Row>
                <Col  xs={3} className="subTitle">
                  Education
                </Col>
                <Col  xs={9}>
                  <h5>University of Maryland - College Park</h5>
                  <h6>Computer Science + Finance, 2020 - 2024</h6>
                  <h6>GPA: 3.96/4.0</h6>
                  <p> Relevant Coursework: Data Structures, Discrete Mathematics, Linear Algebra </p>
                </Col>
            </Row>
      </Container>
      <Container className = 'section'>
            <Row>
                <Col  xs={3} className="subTitle">
                  Work Experience
                </Col>
                <Col  xs={9}>
                  <h5>Mareana, Inc.</h5>
                  <h6>Data Science Intern, Princeton NJ, June 2019 - August 2019</h6>
                  <p class="workexpinfo"> 
                    Analyzed and compiled sales data for healthcare client using Pandas software library and Alteryx to
                    gain valuable insight on methods to maximize business efficiency.
                  </p>

                  <h5>Wawa</h5>
                  <h6>Fuel Service Associate, June 2019 - September 2019</h6>
                  <p class="workexpinfo"> 
                    Responsibilities include dispensing fuel, handling customer transactions, and managing and reconciling
                    financial accounts at my station.
                  </p>

                  <h5>Private Tutor</h5>
                  <h6>September 2019 - Present</h6>
                  <p> 
                    Private tutor.
                  </p>
                </Col>
            </Row>
      </Container>
      <Container className = 'section'>
            <Row>
                <Col  xs={3} className="subTitle">
                  Projects
                </Col>
                <Col  xs={9}>
                    <Row>
                        <Cards className = 'card' title='Personal Website' subtitle='nghate.me' 
                        link1='View Project' addy1='https://github.com/nghate1/nghate1.github.io'
                        />
                    </Row>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default App;
