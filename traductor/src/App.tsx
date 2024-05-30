import { useState, useReducer } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types';
import { TextArea } from './components/TextArea';






function App() {
  const { fromLanguage, toLanguage, fromText, result, interChangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult } = useStore()

  return (

    <Container fluid>
      <h3> Google Translate    </h3>

      <Row>
        <Col>

          <Stack gap={2}>
            <LanguageSelector onChange={setFromLanguage} type={SectionType.From} value={fromLanguage} />
            <TextArea
         
              placeholder='Introducir texto...'
              value={fromText}
              onChange={setFromText}
              type={SectionType.From}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={
            interChangeLanguages
          }>
            <ArrowsIcon />

          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector onChange={setToLanguage} type={SectionType.To} value={toLanguage} />
            <TextArea
              
              placeholder='Traducción'
              value={result}
              onChange={setResult}
              type={SectionType.To}
            />
          </Stack>
        </Col>
      </Row>


    </Container>

  )
}

export default App
