import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

/**
 * Obs.:
 *  1) Não conseguimos fazer o encadeamento de elementos como foi feito no ReactJS
 *  2) Temos que criar um componente pra cada vez que formos estilizar algo
 *  3) Não temos estilos globais no React Native, mas podemos criar componentes e compartilha-los em vários lugares
 */
