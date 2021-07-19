import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Content = styled.form`
display: flex;
justify-content: center;
align-items: center;

width: 500px;

padding: 40px 10px;
margin: 10px;

background: #fff;
border: 1px solid #e3e3e3;

gap: 5px;

input {
  height: 40px;
  padding: 0 16px;
}
`