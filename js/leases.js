window.RentFlowLeases = {
  overlaps(db,unitId,startDate,endDate,ignoreId=""){
    return db.leases.some(l=>l.unitId===unitId&&l.id!==ignoreId&&l.status!=="cancelled"&&startDate<=l.endDate&&endDate>=l.startDate);
  },
  generateObligation(db,lease,periodStart,periodEnd){
    const exists=db.obligations.some(o=>o.leaseId===lease.id&&o.periodStart===periodStart);
    if(exists) throw new Error("A rent obligation already exists for that lease and period.");
    const start=new Date(periodStart+"T00:00:00");
    const dueDay=Math.min(Number(lease.dueDay)||1,new Date(start.getFullYear(),start.getMonth()+1,0).getDate());
    const dueDate=`${periodStart.slice(0,7)}-${String(dueDay).padStart(2,"0")}`;
    const obligation={id:window.RentFlowUtils.id("o"),leaseId:lease.id,periodStart,periodEnd,dueDate,amountDue:Number(lease.rentAmount)};
    db.obligations.push(obligation);return obligation;
  }
};
