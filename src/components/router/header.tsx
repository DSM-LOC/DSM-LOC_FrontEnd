import styled from "styled-components";
import LogoImg from "utils/assets/image/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigate>
        <NavItem>챌린지 모집</NavItem>
        <NavItem>챌린지 생성</NavItem>
        <NavItem>카테고리</NavItem>
        <NavItem>MYPAGE</NavItem>
      </Navigate>
    </HeaderContainer>
  );
};

const NavItem = styled.p`
  font-size: 16px;
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
`;

const Navigate = styled.nav`
  display: flex;
  gap: 120px;
  align-items: center;
`;
const Logo = styled.div`
  width: 55px;
  height: 55px;
  background-image: url(${LogoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const HeaderContainer = styled.header`
  width: 100vw;
  height: 70px;
  background-color: #bbe2eb;
  box-sizing: border-box;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
