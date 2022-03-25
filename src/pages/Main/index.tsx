import React from 'react'
import {
  Container,
  Header,
  Body,
  Text,
  Cards,
  ManegePerfil,
  Card,
  ImgContainer,
} from './styles'
import Netflix from '../../static/Netflix'
import { BigHead } from '@bigheads/core'

const Main = () => {
  return (
    <Container>
      <Header>
        <Netflix />
      </Header>
      <Body>
        <div className="container">
          <Text>Quem está assistindo?</Text>
          <Cards>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Fulano
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Ciclano
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Beutrano
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Josué
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Arnaldo
            </Card>
          </Cards>
          <ManegePerfil>Gerenciar perfis</ManegePerfil>
        </div>
      </Body>
    </Container>
  )
}

export default Main
