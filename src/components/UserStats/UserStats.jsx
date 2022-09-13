import PropTypes from 'prop-types';
import { Stats, StatsItem, Label, Quantity } from 'components/UserStats/UserStats.styled'

export const UserStats = ({ followers, views, likes}) => {
    return <Stats class="stats">
    <StatsItem>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
      <Label>Likes</Label>
      <Quantity>{likes}</Quantity>
    </StatsItem>
  </Stats>
}

UserStats.propTypes = {
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}