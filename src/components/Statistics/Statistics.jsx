import PropTypes from 'prop-types'
import css from 'components/Statistics/Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    // console.log(stats)
    return ( 
    
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.stat_list}>
                {stats.map(card => (
                    <div key={card.id}>
                        <li className={css.item}>
                            <span className={css.label}>{card.label}</span>
                            <span className={css.percentage}>{card.percentage}%</span>
                        </li>
                    </div> 
                ))}
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
        percentage: PropTypes.number.isRequired
    }))
}