window.RentFlowReports = {
  occupancy(db,asOf=window.RentFlowUtils.today()){
    const units=db.units.filter(u=>!u.archived),occupied=window.RentFlowProperties.occupiedUnitIds(db,asOf);
    return {total:units.length,occupied:[...occupied].filter(id=>units.some(u=>u.id===id)).length,rate:units.length?Math.round([...occupied].filter(id=>units.some(u=>u.id===id)).length/units.length*100):0};
  },
  outstanding(db,asOf=window.RentFlowUtils.today()){
    return db.obligations.filter(o=>o.dueDate<=asOf).reduce((sum,o)=>sum+window.RentFlowPayments.balance(db,o),0);
  },
  rentDue(db,start,end){return db.obligations.filter(o=>o.dueDate>=start&&o.dueDate<=end).reduce((sum,o)=>sum+o.amountDue,0);}
};
