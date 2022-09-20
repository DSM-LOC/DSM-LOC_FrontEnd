import styled from "styled-components";
import pictures from "assets/image/pictures.png";
import people from "assets/image/people.png";
import calendar from "assets/image/calendar.png";
import plus from "assets/image/plus.png";
import publics from "assets/image/publics.svg";
import privates from "assets/image/privates.svg";

export default function CreatePost() {
  return (
    <Frame>
      <Container>
        <h1>챌린지 개설하기</h1>
        <Wrapper>
          <InImg>
            <img src={pictures} alt="" />
          </InImg>
          <Post>
            <input type="text" placeholder="챌린지 제목을 입력해주세요!" />

            <Choice>
              <FirstItem>
                <div>
                  <img id="firstImg" src={people} alt="" />
                  <p>인원 수 선택</p>
                </div>
                <div>
                  <img id="secondImg" src={calendar} alt="" />
                  <p>기간 선택</p>
                </div>
              </FirstItem>
              <SecondItem>
                <div id="publics">
                  <img src={publics} alt="" />
                  <p>공개</p>
                </div>
                <div id="privates">
                  <img src={privates} alt="" />
                  <p>비공개</p>
                </div>
              </SecondItem>
            </Choice>

            <Plus>
              <img src={plus} alt="" />
              <p>카테고리 추가하기</p>
            </Plus>

            <textarea placeholder="어떤 챌린지인지 설명해주세요!"></textarea>

            <button>챌린지 방 생성하기</button>
          </Post>
        </Wrapper>
      </Container>
    </Frame>
  );
}

const Frame = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 1000px;
  }
`;

const Wrapper = styled.div`
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InImg = styled.div`
  width: 510px;
  height: 380px;
  border-radius: 5px;
  background: #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 75px;
    height: 70px;
    cursor: pointer;
  }
`;

const Post = styled.div`
  position: relative;
  width: 450px;
  height: 380px;
  gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    width: 448px;
    height: 55px;
    padding-left: 5px;
    border: none;
    outline: none;
    font-size: 30px;
    font-weight: 600;
  }

  textarea {
    width: 98%;
    height: 100px;
    outline: none;
    resize: none;
  }

  button {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 2px;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background: #545454;
  }
`;

const Choice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
  }
`;

const FirstItem = styled.div`
  width: 100%;
  gap: 20px;
  cursor: pointer;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  #firstImg {
    width: 22px;
    height: 22px;
  }
  #secondImg {
    width: 18px;
    height: 18px;
  }
`;

const SecondItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  p {
    margin: 0;
    font-size: 11px;
    font-weight: 600;
  }
  img {
    width: 12px;
  }
  div {
    width: 64px;
    gap: 2px;
    padding: 3.2px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  #publics {
    border-radius: 20px 0 0 20px;
    border: #61a5d8 2px solid;
    color: #61a5d8;
    img {
      color: #61a5d8;
    }
  }
  #privates {
    border-radius: 0 20px 20px 0;
    border: #d9d9d9 2px solid;
    color: #d9d9d9;
    img {
      color: #d9d9d9;
    }
  }
`;

const Plus = styled.div`
  width: 100%;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;

  img {
    width: 19px;
    height: auto;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
`;
