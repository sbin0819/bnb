import styled from 'styled-components';
import palette from '../../../styles/palette';
import { useSelector } from '../../../store';
import { useDispatch } from 'react-redux';
import { registerRoomActions } from '../../../store/registerRoom';

import Counter from '../../common/Counter';
import RadioGroup from '../../common/RadioGroup';
import RegisterFooter from './RegisterRoomFooter';

const Conatiner = styled.div`
  padding: 62px 30px 100px;
  h2 {
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 56px;
  }
  h3 {
    font-weight: bold;
    color: ${palette.gray_76};
    margin-bottom: 6px;
  }
  .register-room-step-info {
    font-size: 14px;
    max-width: 400px;
    margin-bottom: 24px;
  }
  .register-room-bathroom-counter-wrapper {
    width: 290px;
    margin-bottom: 32px;
  }
`;

const RegisterBathRoom = () => {
  const { bathroomCount, bathroomType } = useSelector(
    ({ registerRoom }) => registerRoom,
  );

  const dispatch = useDispatch();

  return (
    <Conatiner>
      <h2>욕실 수</h2>
      <h3>3단계</h3>
      <p className="register-room-step-info">
        샤워실 또는 욕조가 없는 경우 0.5개로 간주합니다.
      </p>
      <div className="register-room-bathroom-counter-wrapper">
        <Counter
          label="욕실"
          increaseNum={0.5}
          value={bathroomCount}
          onChange={(value) =>
            dispatch(registerRoomActions.setBathroomCount(value))
          }
        />
      </div>
      <RadioGroup
        label="게스트가 단독으로 사용하는 욕실인가요?"
        value={bathroomType}
        isValid={!!bathroomType}
        onChange={(value) =>
          dispatch(registerRoomActions.setBathroomType(value))
        }
        options={[
          { value: 'private', label: '예' },
          { value: 'public', label: '아니요, 공용입니다.' },
        ]}
      />
      <RegisterFooter
        prevHref="/room/register/bedrooms"
        nextHref="/room/register/location"
        isValid={bathroomCount > 0 && !!bathroomType}
      />
    </Conatiner>
  );
};

export default RegisterBathRoom;
