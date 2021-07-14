import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f8f2f5;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
      /* É aconselhado utiliar a medida em porcentagem por questão de acessibilidade, por exemplo, caso o usuário
      esteja utiliando fontes maiores no celular, essa fonte também vai se ajustar de acordo com a preferência do usuário, não deixando o valor fixo.
      Além de todas as medidas do css serem usadas na medida rem, que também auxilia a manter a aplicação visualmente bonita. */
    }

    @media(max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export { GlobalStyle };