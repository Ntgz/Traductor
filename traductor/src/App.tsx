import { useState,useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useStore } from './hooks/useStore';
import {AUTO_LANGUAGE} from './constants'






function App() {
   const { fromLanguage, toLanguage, interChangeLanguages } = useStore()

  return (

    <Container fluid>
      <h1>Google translate</h1>

      <Row>
        <Col>
        <h2>From</h2>
        {fromLanguage}
        </Col>
        <Col>
        <button disabled = {fromLanguage === AUTO_LANGUAGE} onClick={
          interChangeLanguages
        }>
          intercambiar
        </button>
        </Col>
        <Col>
        <h2>To</h2>
        {toLanguage}
        </Col>
      </Row>

      
    </Container>
    
  )
}

export default App
