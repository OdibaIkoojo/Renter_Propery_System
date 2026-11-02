/* Property/unit helpers used by the application. */
window.RentFlowProperties = {
  getById(db,id){return db.properties.find(x=>x.id===id);},
  units(db,propertyId){return db.units.filter(x=>x.propertyId===propertyId&&!x.archived);},
  occupiedUnitIds(db,asOf=window.RentFlowUtils.today()){
    return new Set(db.leases.filter(l=>l.status==="active"&&l.startDate<=asOf&&l.endDate>=asOf).map(l=>l.unitId));
  },
  addProperty(db,property){db.properties.push(property);},
  addUnit(db,unit){db.units.push(unit);}
};
