import RegisterRoomBedTypes from './RegisterRoomBedTypes';
import RegisterRoomPublicBedTypes from './RegisterRoomPublicBedTypes';
import { useSelector } from '../../../store';

const RegisterRoomBedRoomList: React.FC = () => {
  const { bedList } = useSelector(({ registerRoom }) => registerRoom);
  return (
    <ul className="register-room-bed-type-list-wrapper">
      {bedList.map((bedroom, index) => (
        <RegisterRoomBedTypes key={index} bedroom={bedroom} />
      ))}
      {/* <RegisterRoomPublicBedTypes /> */}
    </ul>
  );
};

export default RegisterRoomBedRoomList;
