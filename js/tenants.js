window.RentFlowTenants = {
  getById(db,id){return db.tenants.find(x=>x.id===id);},
  currentLease(db,tenantId,asOf=window.RentFlowUtils.today()){
    return db.leases.find(l=>l.tenantId===tenantId&&l.status==="active"&&l.startDate<=asOf&&l.endDate>=asOf);
  },
  history(db,tenantId){return db.leases.filter(l=>l.tenantId===tenantId);}
};
