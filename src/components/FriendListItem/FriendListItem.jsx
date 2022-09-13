import PropTypes from 'prop-types';
import { FriendsItem, Status, Avatar, FriendName } from 'components/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <FriendsItem>
        <Status status={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <FriendName class="name">{name}</FriendName>
    </FriendsItem>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}