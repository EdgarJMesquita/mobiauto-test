# Nota para avaliadores

## Branch "main"

Na branch "main" do repositório segui o segui os requisitos do teste, utilizando a API https://deividfortuna.github.io/fipe

## Branch "nextLevel"

Na branch "nextLevel" decidi usar a API da Mobiauto https://api.mobiauto.com.br/. Com esta API foi possível mostrar mais informações como:

1.  Gráficos com histórico dos preço da tabela Fipe
2.  Adicionar seleção de modelo("trim") após seleção de ano.
3.  Adicionar listagem com preços para o modelos do ano selecionado em detalhes.
4.  Mais detalhes na ficha técnica

## Layout

Como não sou bom em UI/UX, resolvi adotar o layout do site da Mobiauto versão mobile.

## Código

Reconheço melhorias e refatorações que podem melhorar o código, porém devido ao período curto de tempo decidi focar na entrega.

## Tecnologias

- **expo**:
  Escolher expo sobre cli do react-native pareceu adequado, pois o app não requer recursos nativos específicos.

- **axios**:
  Padrão para todos os meus projetos, fácil de criar uma instancia base para todas as chamadas par a API. Além de oferecer uso de interceptors(Bom para debugar e analisar errors HTTP)

- **@react-navigation**:
  Escolha certa para criar uma navegação agradável ao usuário e fácil de usar.

- **expo-font** e **@expo-google-fonts/poppins**: escolhi utilizar a font Poppins

- **react-native-modal**: Para criar um modal de fácil utilização na seleção de filtros.

- **"react-native-svg**: Para utilizar SVG e também uma dependência do react-native-svg-charts.

- **react-native-svg-charts**: Para utilizar gráficos e apresentar o histórico de preços dos veículos.

- **swr**: Padrão para os meus projetos, gerenciador de cache trabalhando junto com axios.

- **styled-components**: Lib incrível que ajuda a limpar e tornar a estrutura do código mais semântico.

- **react-native-svg-transformer**: Tornar possível importar diretamente um arquivo .svg e utilizá-lo como um componente React.

- **babel-plugin-module-resolver**: Plugin para utilizar de importações absolutos, evitando o excesso de pontos e barras.

- **typescript**: Superset do javascript, ajuda bastante na refatoração e prevenção de errors de tipagem.

## Estrutura de pastas

- **src**: Todo o código fonte está dentro da pasta, exceto App.tsx

- **src/@types**: Contém tipos do projeto. Como respostas do servidor.

- **src/assets**: Pasta destinada para imagens e svgs estáticos.

- **src/components**: Pasta destinada para componentes da aplicação.

- **src/global**: Destinada para o tema da aplicação.

- **src/hooks**: Destinada a hooks customizados. Como useAxiosInterceptor()

- **src/routes**: Contém configuração das telas da aplicação.

- **src/screens**: Contém as telas da aplicação. Home e VehicleDetails.

- **src/services**: Contém configuração para conexão com a API.

- **src/utils**: Contém utilitários que podem ser reutilizados.

# Instruções

## 1. Clonar projeto

```bash
 $ git clone https://github.com/EdgarJMesquita/mobiauto-test.git
```

## 2. Ter Node instalado

## 3. Instalar pacotes

```bash
 $ yarn
```

## 4. Iniciar Servidor Metro

```bash
 $ yarn start
```

#

obs: não há necessidade de gerar build de debug, basta usar o Expo Go.
