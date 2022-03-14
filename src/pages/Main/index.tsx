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
              Hitallo
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Junior
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Nilo
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Zeni
            </Card>
            <Card>
              <ImgContainer className="char">
                <BigHead />
              </ImgContainer>
              Kamilla
            </Card>
          </Cards>
          <ManegePerfil>Gerenciar perfis</ManegePerfil>
        </div>
      </Body>
    </Container>
  )
}

export default Main
