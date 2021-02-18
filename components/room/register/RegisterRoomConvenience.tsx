import styled from 'styled-components';
import palette from '../../../styles/palette';
import { convinienceList } from '../../../lib/staticData';

import { useSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { registerRoomActions } from '../../../store/registerRoom';

import CheckboxGroup from '../../common/CheckboxGroup';
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

  .register-room-convenience-checkbox-group-wrapper {
  }
`;

const RegisterRoomConvenience: React.FC = () => {
  const dispatch = useDispatch();
  const { conveiences } = useSelector(({ registerRoom }) => registerRoom);

  const onChangeConviniences = (selected: string[]) => {
    dispatch(registerRoomActions.setConveniences(selected));
  };

  return (
    <Container>
      <h2>어떤 편의 시설을 제공하시나요?</h2>
      <h3>5단계</h3>
      <p className="register-room-step-info">
        일반적으로 게스트가 기대하는 편의 시설 목록입니다. 숙소를 등록한 후
        언제든 편의 시설을 추가할 수 있어요.
      </p>
      <div className="register-room-convenience-checkbox-group-wrapper">
        <CheckboxGroup
          value={conveiences}
          onChange={onChangeConviniences}
          options={convinienceList}
        />
      </div>
      <RegisterRoomFooter
        prevHref="/room/register/amentities"
        nextHref="/room/register/photo"
      />
    </Container>
  );
};

export default RegisterRoomConvenience;
