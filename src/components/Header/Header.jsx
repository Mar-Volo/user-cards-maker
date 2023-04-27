import { HeaderBox } from "./Header.styled";
import { Container } from "../Layout/Layout.styled";
import { NavBar } from "./Header.styled";
import { NavItem } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderBox>
      <Container style={{width: '1200px'}}>
        <NavBar>
          <NavItem>Home</NavItem>
          <NavItem>Tweets</NavItem>
        </NavBar>
      </Container>
    </HeaderBox>
  );
};