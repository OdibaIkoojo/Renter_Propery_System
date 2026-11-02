window.RentFlowMaintenance = {
  openItems(db){return db.maintenance.filter(m=>["open","in-progress"].includes(m.status));},
  expenses(db,start="0000-01-01",end="9999-12-31"){
    return db.maintenance.filter(m=>m.status==="completed"&&m.completedAt>=start&&m.completedAt<=end).reduce((sum,m)=>sum+Number(m.cost||0),0);
  }
};
