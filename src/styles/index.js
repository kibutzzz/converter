import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 95%;
  max-width: 800px;
  background-color: #dbe2ef;
  margin: 18px auto;
  padding: 28px;

  box-shadow: 0px 3px 11px 0px rgba(0,0,0,0.9);

  > h1 {
    font-size: 1.4rem;
  }
`;

export const LanguageContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    > img {
      width: 50px;
      margin-right: 10px;
      box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.9);
    }
`

export const InputBlock = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.25rem;
  }

  input {
    padding: 4px;
    font-size: 1rem;
    transition: font-size ease 0.3s;
    :focus {
      font-size: 1.2rem;
    }
  }
`;

 