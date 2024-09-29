import { styled } from 'styled-components';

export const LoginStyle = styled.div`
width: 320px;
margin-left: auto;
margin-right: auto;
`;

export const Label = styled.label`
 display: flex;
  flex-direction: column;
  height: 80px;
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
  max-width: 80%;
  min-width: 100px;
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
  display: flex;
  justify-content: center;
  align-items: center;
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
  height: 320px;
  padding: 20px;
  min-width: 320px;
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
   color: #fff;
    font-size: 1.25rem;
    line-height: 1;
    border-style: none;
    outline: none;
    height: calc(1em + 1.6em + 0.5em);
    width: 100%;
    padding: 0.5em 1em;
    border: 0.25em solid transparent;
    background-image: linear-gradient(#000, #000),
      linear-gradient(120deg, #f09 0%, #0ff 50%, #9f0 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: 1.8em;
    background-size: 200% 100%;
    transition: background-position 0.8s ease-out;
    
    &:hover {
      background-position: 100% 0;
    }

    &:focus {
      outline: 2px dashed #ad2b89;
      outline-offset: 0.5em;
    }
  `;