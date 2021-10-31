import { getRandomColor } from "./getRandomColor.js"
import PropTypes from "prop-types";


export const Statistics = ({ title, stats }) => {
  console.log(title);
  return     <section className="statistics">
      {title.length > 0 && ( <h2 className="title-stats">{title}</h2>)}
      <ul className="stat-list stats">
      {
        stats.map(({id, label, percentage }) => {
      return <li key={id} className="item-stats" style={{ backgroundColor:`${getRandomColor()}`}}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
    })
        }
      </ul>
    </section>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
};