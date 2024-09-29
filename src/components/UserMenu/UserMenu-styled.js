import { styled } from 'styled-components';

export const UserName = styled.span`
font-size: .9375rem;
display: flex;
font-family: inherit;
 font-weight: 700;
 align-items: center;
 padding-right: 12px;
 padding-left: 32px;
 width: 100%;
 margin: 0;
 `;

 export const Button = styled.button`
   display: flex;
  align-items: center;
  gap: 12px;  
  background-color: #fff000;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  margin: 0;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:hover,
&:focus {
  outline: 0;
  background: #f4e603;
  box-shadow: 0 0 0 2px rgba(0,0,0,.2), 0 3px 8px 0 rgba(0,0,0,.15);
}
  `;
  
  export const NavStatus = styled.div`
display: flex;
gap: 5px;
    unicode-bidi: isolate;
    `;