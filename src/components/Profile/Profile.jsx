import PropTypes from 'prop-types';
import { UserDescription } from 'components/UserDescription/UserDescription';
import {UserStats} from 'components/UserStats/UserStats'

export const Profile = () => {
    return <div class="profile">
        <UserDescription />
        <UserStats />
</div>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}