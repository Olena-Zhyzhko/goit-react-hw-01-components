import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendListContainer } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
    return <FriendListContainer>
        {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline} />
                )
            )}
    </FriendListContainer>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    )
}