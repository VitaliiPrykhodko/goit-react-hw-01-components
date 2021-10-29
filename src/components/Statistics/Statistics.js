export const Statistics = ({ title, stats }) => {
  const markup =  stats.map(({id, label, percentage }) => {
      return <li key={id} className="item-stats" style={{ backgroundColor:`${getRandomColor()}`}}>
          <span className="label">{label}</span>
          <span className="percentage">{percentage}%</span>
        </li>
    })
  return     <section className="statistics">
      {title ? <h2 className="title-stats">{title}</h2> : ""}
      <ul className="stat-list stats">
        {markup}
      </ul>
    </section>
};

function getRandomColor () {
  let hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
