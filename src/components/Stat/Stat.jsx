import PropTypes from 'prop-types';
import { StatItem, Label, Percentage } from 'components/Stat/Stat.styled'

export const Stat = ({ label, percentage }) => {
    const bgColor = getRandomHexColor();

    return (
        <StatItem style={{backgroundColor: `${bgColor}`}}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
        </StatItem>
    )
}

Stat.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

