import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"

import * as S from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <S.MainContent>
      <h1>Sobre mim</h1>
      <h2>Brave, Not Perfect</h2>
      <h3>
        Alguns vêem as coisas como são, e dizem 'Por quê?' Eu sonho com as
        coisas que nunca foram e digo 'Por que não?'
      </h3>
      <p>
        Eu gosto de acreditar naquilo que ninguém acredita, eu gosto de sonhar
        as coisas que ninguém sonha, eu gosto de imaginar aquilo que ninguém
        imagina... e eu gosto de ser profunda, mesmo que as vezes eu me perca ou
        me machuque nessa imensidão...sentir a vida intensamente faz parte de QM
        eu sou.{" "}
      </p>
      <p>
        Uma dev apaixonada por tecnologia e seu poder de transformação! Na
        tecnologia eu consigo alcançar as 4 características que me movem
        (dinamismo, criatividade, desafios e inovação), transformação ao meu
        alcance, isso mexe comigo. Por isso não quero escrever linhas de
        códigos, quero linhas de transformação.
      </p>
    </S.MainContent>
  </Layout>
)
export default AboutPage
