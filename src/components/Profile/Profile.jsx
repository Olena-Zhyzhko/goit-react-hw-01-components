import PropTypes from 'prop-types';
import { UserDescription } from 'components/UserDescription/UserDescription';
import {UserStats} from 'components/UserStats/UserStats'

export const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats } = user;
    const { followers, views, likes } = stats;
    return <div class="profile">
        <UserDescription 
        username={username} tag={tag} location={location} avatar={avatar} 
        />
        <UserStats 
        followers={followers} views={views} likes={likes} 
        />
</div>
}

Profile.propTypes = {
    user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
  })
})
}