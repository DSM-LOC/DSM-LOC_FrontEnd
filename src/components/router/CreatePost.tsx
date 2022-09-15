import styled from "styled-components";
import pictures from "../../utils/assets/image/pictures.png";
import people from "../../utils/assets/image/people.png";
import calendar from "../../utils/assets/image/calendar.png";
import plus from "../../utils/assets/image/plus.png";

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
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const FirstItem = styled.div`
  width: 100%;
  gap: 20px;
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

const Plus = styled.div`
  width: 100%;
  gap: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 19px;
    height: auto;
  }
  p {
    font-size: 14px;
    font-weight: 600;
  }
`;
