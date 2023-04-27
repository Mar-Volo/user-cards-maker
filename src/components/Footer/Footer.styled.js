import styled from 'styled-components';

export const FooterBox = styled.footer`
width: 100%;
min-height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: #c6c5ef;
margin-top: auto;
`
export const FooterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 1200px;
`
export const FooterTitle = styled.p`
  color: #373737;
  font-size: 15px;
  position: relative;
  &:not(:last-of-type) {
     margin-right: 18px;
  }
  &:not(:last-of-type)::after {
    content: '';
    width: 2px;
    height: 18px;
    background-color: #373737;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: -10px;
  }
`;