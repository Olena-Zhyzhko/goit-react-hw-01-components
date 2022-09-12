import PropTypes from 'prop-types';
import { Stat } from 'components/Stat/Stat';



export const Statistics = ({ title, stats }) => {
    return (
        <section class="statistics">
        {title && <h2 class="title">{title}</h2>}
        
        <ul class="stat-list">
            {stats.map(({ id, label, percentage }) => (
                <Stat
                    key={id}
                    label={label}
                    percentage={percentage} />
                )
            )}
        </ul>
        
        </section>
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