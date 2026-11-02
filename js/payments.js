window.RentFlowPayments = {
  validPayments(db,obligationId){return db.payments.filter(p=>p.obligationId===obligationId&&p.status==="valid");},
  paid(db,obligationId){return this.validPayments(db,obligationId).reduce((sum,p)=>sum+Number(p.amount||0),0);},
  balance(db,obligation){return Math.max(0,Number(obligation.amountDue)-this.paid(db,obligation.id));},
  status(db,obligation,asOf=window.RentFlowUtils.today()){
    const paid=this.paid(db,obligation.id),balance=this.balance(db,obligation);
    if(balance===0)return "paid";
    if(paid>0)return "partial";
    if(obligation.dueDate<asOf)return "overdue";
    return "unpaid";
  },
  collected(db,start,end){
    return db.payments.filter(p=>p.status==="valid"&&p.paymentDate>=start&&p.paymentDate<=end).reduce((s,p)=>s+Number(p.amount||0),0);
  }
};
