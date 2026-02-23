import './statCard.css'
const StatCard = ({cardLabel, totalCount, cardIcon}) =>{
    
return(
 <div className="stat-Card">
    <h1 className="stat-head">{cardLabel}</h1>
    <p className='card-icon'>{cardIcon}</p>
    <h2>{totalCount}</h2>
 </div>  
)
}
export default StatCard