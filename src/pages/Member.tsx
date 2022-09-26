import styled from "styled-components";
import member from "assets/image/Member.svg";

function Member() {
  return (
    <Wrapper>
      <Header>
        <b>다이어트 같이 해요!!</b>
        <div className="period">기간 : 2022.06.01 - 2202.06.30</div>
        <div className="people">인원: 30명</div>
        <div className="gopost">게시판 바로 가기</div>
      </Header>
      <MemberWrapper>
        <div className="memberlist">멤버 목록</div>
        <Profile src={member} />
      </MemberWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Header = styled.div`
  font-size: 40px;
  .period {
    font-weight: 400;
    font-size: 20px;
  }
  .people {
    text-decoration: underline;
    font-weight: 400;
    font-size: 20px;
  }
  .gopost {
    text-decoration: underline;
    font-weight: 500;
    font-size: 20px;
  }
`;

const MemberWrapper = styled.div`
  .memberlist {
    font-size: 32px;
    font-weight: 700;
  }
`;

const Profile = styled.img`
    width: 3%;
`

export default Member;
