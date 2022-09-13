import PropTypes from 'prop-types';
import { Stat } from 'components/Stat/Stat';
import { StatisticsContainer, TitleStats, StatList } from 'components/Statistics/Statistics.styled';



export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsContainer>
        {title && <TitleStats>{title}</TitleStats>}
        
        <StatList>
            {stats.map(({ id, label, percentage }) => (
                <Stat
                    key={id}
                    label={label}
                    percentage={percentage} />
                )
            )}
        </StatList>
        
        </StatisticsContainer>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}