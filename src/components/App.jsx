import { Profile } from 'components/Profile/Profile';
import user from 'path/to/user.json'

export const App = ({ username, tag, location, avatar, stats}) => {
  console.log(username, tag, location, avatar, stats);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile />
      {/* React homework template */}
    </div>
  );
};
