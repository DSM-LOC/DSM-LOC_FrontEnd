import styled from "styled-components";
import githubImg from "assets/image/common/github.svg";
import footerLogoImg from "assets/image/common/footerLogo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <GithubLogo />
      <DevelopersWrap>
        <Developers>
          <Developer>Backend</Developer>
          <Developer>이예빈</Developer>
          <Developer>박상진</Developer>
        </Developers>
        <Developers>
          <Developer>Frontend</Developer>
          <Developer>신윤호</Developer>
          <Developer>김민성</Developer>
          <Developer>배준수</Developer>
          <Developer>임수빈</Developer>
        </Developers>
      </DevelopersWrap>
      <FooterLogo src={footerLogoImg} />
    </FooterContainer>
  );
};

const FooterLogo = styled.img`
  height: 120%;
  position: absolute;
  right: 12vw;
  top: 0;
`;

const DevelopersWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

const Developers = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 30px;
`;

const Developer = styled.p`
  margin: 0;
  font-size: 18px;
  font-family: "Noto Sans KR", sans-serif;
  color: #888888;
  width: 80px;
  text-align: center;
`;

const GithubLogo = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${githubImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const FooterContainer = styled.footer`
  width: 100vw;
  height: 110px;
  background-color: #bbe2eb;
  box-sizing: border-box;
  padding: 0 70px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export default Footer;
