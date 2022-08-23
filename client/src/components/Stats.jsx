

function Stats({bgColor="error"}) {
  return (
    <div className={`stats bg-${bgColor} shadow-2xl text-${bgColor}-content `}>
  
    <div className="stat">
      <div className="stat-title">Account balance</div>
      <div className="stat-value">$89,400</div>
      <div className="stat-actions">
        <button className="btn btn-sm btn-success">Add funds</button>
      </div>
    </div>
    
    <div className="stat">
      <div className="stat-title">Current balance</div>
      <div className="stat-value">$89,400</div>
      <div className="stat-actions space-x-2">
        <button className="btn btn-sm">Withdrawal</button> 
        <button className="btn btn-sm">deposit</button>
      </div>
    </div>
    
  </div>
  )
}

export default Stats