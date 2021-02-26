import styled from 'styled-components';
import palette from '../../../styles/palette';

import DatePicker from '../../common/DatePicker';

import { useSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { registerRoomActions } from '../../../store/registerRoom';

import RegisterRoomFooter from './RegisterRoomFooter';

const Container = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 24px;
  }
  .register-room-step-info {
    font-size: 14px;
    max-width: 400px;
    margin-bottom: 24px;
  }
`;

const RegisterRoomDate: React.FC = () => {
  const dispatch = useDispatch();
  const { title } = useSelector(({ registerRoom }) => registerRoom);

  //* 제목 변경 시
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(registerRoomActions.setTitle(e.target.value));
  };

  return (
    <Container>
      <h2>예약 가능 여부 설정하기</h2>
      <h3>11단계</h3>
      <DatePicker onChange={(date) => console.log(date)} />
      <RegisterRoomFooter
        prevHref="/room/register/description"
        nextHref="/room/register/price"
      />
    </Container>
  );
};

export default RegisterRoomDate;
