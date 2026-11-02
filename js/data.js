/* Fictional starter data. Amounts are whole Nigerian naira. */
window.RentFlowSeed = {
  schemaVersion: 1,
  properties: [
    {id:"p1",name:"The Meridian Apartments",address:"14 Adeola Odeku Street, Victoria Island, Lagos",type:"Apartment block",description:"Contemporary apartments close to business districts.",createdAt:"2025-02-12",archived:false},
    {id:"p2",name:"Palm Grove Residences",address:"8 Fola Osibo Road, Lekki Phase 1, Lagos",type:"Residential",description:"Quiet residential property with shared courtyard.",createdAt:"2025-03-08",archived:false},
    {id:"p3",name:"Cedar Court",address:"22 Ajao Road, Ikeja, Lagos",type:"Duplex",description:"Family-friendly homes in a convenient location.",createdAt:"2025-04-19",archived:false},
    {id:"p4",name:"Harbour View Flats",address:"5 Marina Road, Apapa, Lagos",type:"Apartment block",description:"Practical city apartments.",createdAt:"2025-05-02",archived:false}
  ],
  units: [
    {id:"u1",propertyId:"p1",unitNumber:"A-01",unitType:"2 Bedroom",monthlyRent:1800000,notes:"Balcony",archived:false},
    {id:"u2",propertyId:"p1",unitNumber:"A-02",unitType:"2 Bedroom",monthlyRent:1750000,notes:"",archived:false},
    {id:"u3",propertyId:"p1",unitNumber:"B-01",unitType:"3 Bedroom",monthlyRent:2400000,notes:"",archived:false},
    {id:"u4",propertyId:"p1",unitNumber:"B-02",unitType:"1 Bedroom",monthlyRent:1250000,notes:"",archived:false},
    {id:"u5",propertyId:"p2",unitNumber:"PG-01",unitType:"3 Bedroom",monthlyRent:2200000,notes:"Garden access",archived:false},
    {id:"u6",propertyId:"p2",unitNumber:"PG-02",unitType:"2 Bedroom",monthlyRent:1700000,notes:"",archived:false},
    {id:"u7",propertyId:"p2",unitNumber:"PG-03",unitType:"2 Bedroom",monthlyRent:1650000,notes:"",archived:false},
    {id:"u8",propertyId:"p3",unitNumber:"CC-01",unitType:"4 Bedroom",monthlyRent:3000000,notes:"Duplex",archived:false},
    {id:"u9",propertyId:"p3",unitNumber:"CC-02",unitType:"3 Bedroom",monthlyRent:2500000,notes:"",archived:false},
    {id:"u10",propertyId:"p4",unitNumber:"H-01",unitType:"2 Bedroom",monthlyRent:1400000,notes:"",archived:false},
    {id:"u11",propertyId:"p4",unitNumber:"H-02",unitType:"1 Bedroom",monthlyRent:950000,notes:"",archived:false},
    {id:"u12",propertyId:"p4",unitNumber:"H-03",unitType:"2 Bedroom",monthlyRent:1350000,notes:"",archived:false}
  ],
  tenants: [
    {id:"t1",fullName:"Amara Okafor",phone:"0803 555 0181",email:"amara.okafor@example.com",emergencyContact:"Chidi Okafor · 0802 111 0181",notes:"Prefers calls after 4pm",createdAt:"2025-05-12",archived:false},
    {id:"t2",fullName:"Tunde Balogun",phone:"0806 555 0112",email:"tunde.balogun@example.com",emergencyContact:"Kemi Balogun · 0805 111 0112",notes:"",createdAt:"2025-06-01",archived:false},
    {id:"t3",fullName:"Zainab Yusuf",phone:"0812 555 0133",email:"zainab.yusuf@example.com",emergencyContact:"Musa Yusuf · 0809 111 0133",notes:"",createdAt:"2025-06-17",archived:false},
    {id:"t4",fullName:"Chukwuemeka Nwosu",phone:"0809 555 0144",email:"emeka.nwosu@example.com",emergencyContact:"Ada Nwosu · 0803 111 0144",notes:"",createdAt:"2025-07-03",archived:false},
    {id:"t5",fullName:"Bisi Adebayo",phone:"0703 555 0155",email:"bisi.adebayo@example.com",emergencyContact:"Kunle Adebayo · 0807 111 0155",notes:"Lease renewal to discuss",createdAt:"2025-07-21",archived:false},
    {id:"t6",fullName:"Ifeoma Eze",phone:"0814 555 0166",email:"ifeoma.eze@example.com",emergencyContact:"Nnamdi Eze · 0806 111 0166",notes:"",createdAt:"2025-08-04",archived:false},
    {id:"t7",fullName:"David Olumide",phone:"0802 555 0177",email:"david.olumide@example.com",emergencyContact:"",notes:"",createdAt:"2025-08-23",archived:false},
    {id:"t8",fullName:"Fatima Bello",phone:"0810 555 0198",email:"fatima.bello@example.com",emergencyContact:"Amina Bello · 0804 111 0198",notes:"",createdAt:"2025-09-02",archived:false},
    {id:"t9",fullName:"Kunle Adeyemi",phone:"0805 555 0129",email:"kunle.adeyemi@example.com",emergencyContact:"",notes:"",createdAt:"2025-10-10",archived:false},
    {id:"t10",fullName:"Ngozi Umeh",phone:"0706 555 0190",email:"ngozi.umeh@example.com",emergencyContact:"",notes:"",createdAt:"2025-11-02",archived:false}
  ],
  leases: [
    {id:"l1",tenantId:"t1",unitId:"u1",startDate:"2026-01-01",endDate:"2026-12-31",rentAmount:1800000,dueDay:1,status:"active"},
    {id:"l2",tenantId:"t2",unitId:"u2",startDate:"2026-02-01",endDate:"2027-01-31",rentAmount:1750000,dueDay:1,status:"active"},
    {id:"l3",tenantId:"t3",unitId:"u3",startDate:"2025-12-01",endDate:"2026-11-30",rentAmount:2400000,dueDay:5,status:"active"},
    {id:"l4",tenantId:"t4",unitId:"u5",startDate:"2026-03-01",endDate:"2027-02-28",rentAmount:2200000,dueDay:1,status:"active"},
    {id:"l5",tenantId:"t5",unitId:"u6",startDate:"2026-01-01",endDate:"2026-11-15",rentAmount:1700000,dueDay:1,status:"active"},
    {id:"l6",tenantId:"t6",unitId:"u8",startDate:"2026-04-01",endDate:"2027-03-31",rentAmount:3000000,dueDay:1,status:"active"},
    {id:"l7",tenantId:"t7",unitId:"u9",startDate:"2026-02-01",endDate:"2027-01-31",rentAmount:2500000,dueDay:1,status:"active"},
    {id:"l8",tenantId:"t8",unitId:"u10",startDate:"2026-05-01",endDate:"2027-04-30",rentAmount:1400000,dueDay:1,status:"active"},
    {id:"l9",tenantId:"t9",unitId:"u11",startDate:"2025-08-01",endDate:"2026-07-31",rentAmount:950000,dueDay:1,status:"expired"},
    {id:"l10",tenantId:"t10",unitId:"u12",startDate:"2026-01-01",endDate:"2026-12-31",rentAmount:1350000,dueDay:1,status:"active"}
  ],
  obligations: [
    {id:"o1",leaseId:"l1",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:1800000},
    {id:"o2",leaseId:"l2",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:1750000},
    {id:"o3",leaseId:"l3",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-05",amountDue:2400000},
    {id:"o4",leaseId:"l4",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:2200000},
    {id:"o5",leaseId:"l5",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:1700000},
    {id:"o6",leaseId:"l6",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:3000000},
    {id:"o7",leaseId:"l7",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:2500000},
    {id:"o8",leaseId:"l8",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:1400000},
    {id:"o9",leaseId:"l10",periodStart:"2026-10-01",periodEnd:"2026-10-31",dueDate:"2026-10-01",amountDue:1350000}
  ],
  payments: [
    {id:"pay1",obligationId:"o1",amount:1800000,paymentDate:"2026-10-02",method:"Bank transfer",reference:"RF-1001",status:"valid"},
    {id:"pay2",obligationId:"o2",amount:1000000,paymentDate:"2026-10-03",method:"Bank transfer",reference:"RF-1002",status:"valid"},
    {id:"pay3",obligationId:"o3",amount:2400000,paymentDate:"2026-10-04",method:"Bank transfer",reference:"RF-1003",status:"valid"},
    {id:"pay4",obligationId:"o4",amount:2200000,paymentDate:"2026-10-02",method:"Bank transfer",reference:"RF-1004",status:"valid"},
    {id:"pay5",obligationId:"o5",amount:700000,paymentDate:"2026-10-06",method:"Cash",reference:"RF-1005",status:"valid"},
    {id:"pay6",obligationId:"o6",amount:3000000,paymentDate:"2026-10-01",method:"Bank transfer",reference:"RF-1006",status:"valid"},
    {id:"pay7",obligationId:"o7",amount:2500000,paymentDate:"2026-10-02",method:"Bank transfer",reference:"RF-1007",status:"valid"},
    {id:"pay8",obligationId:"o8",amount:500000,paymentDate:"2026-10-09",method:"Cash",reference:"RF-1008",status:"valid"}
  ],
  maintenance: [
    {id:"m1",propertyId:"p1",unitId:"u2",tenantId:"t2",title:"Kitchen tap leak",description:"Slow leak under kitchen sink.",priority:"high",status:"open",cost:0,reportedAt:"2026-10-25",completedAt:""},
    {id:"m2",propertyId:"p2",unitId:"u6",tenantId:"t5",title:"Air conditioner service",description:"AC requires routine servicing.",priority:"medium",status:"in-progress",cost:45000,reportedAt:"2026-10-20",completedAt:""},
    {id:"m3",propertyId:"p3",unitId:"u8",tenantId:"t6",title:"Gate lock replacement",description:"Front gate lock sticks when turning.",priority:"urgent",status:"open",cost:0,reportedAt:"2026-10-29",completedAt:""},
    {id:"m4",propertyId:"p4",unitId:"u10",tenantId:"t8",title:"Repaint bedroom wall",description:"Scuff marks on bedroom wall.",priority:"low",status:"completed",cost:65000,reportedAt:"2026-10-04",completedAt:"2026-10-10"}
  ],
  settings: {currency:"NGN",dateFormat:"DD/MM/YYYY",ownerName:"John Doe",businessName:"My Rental Portfolio"}
};
