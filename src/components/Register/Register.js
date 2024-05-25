import { styled } from 'styled-components';

export const RegisterStyle = styled.div`
width: 320px;
`;

export const Label = styled.div`
 display: flex;
  flex-direction: column;
  height: 50px;
  position: relative;
  width: 100%;
  `;

  export const Button = styled.button`
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;

 &:active, &:hover {
  outline: 0;
}



@media (min-width: 768px) {
    font-size: 24px;
    min-width: 196px;
}
  `;

  export const Span = styled.span`
  background-color: rgb(5, 6, 45);
  padding: 16px 24px;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: 300ms;

&:hover {
  background: none;
}
`;

export const Form = styled.form`
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: 350px;
  padding: 20px;
  width: 320px;
`;

export const Input = styled.input`
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
  margin-bottom: 30px;
  `;