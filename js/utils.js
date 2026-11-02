window.RentFlowUtils = (() => {
  const icons = {
    home:'<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
    grid:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    building:'<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2m4 0h2M8 11h2m4 0h2M8 15h2m4 0h2M10 21v-3h4v3"/></svg>',
    users:'<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    wallet:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18M16 14h2"/><path d="M6 5V3h12"/></svg>',
    wrench:'<svg viewBox="0 0 24 24"><path d="M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4L14 13l-3-3z"/></svg>',
    chart:'<svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m7 14 4-4 4 3 6-7"/></svg>',
    settings:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.7-1.4-2.4L7.3 15a8 8 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.7a8 8 0 0 1 1.7-1L11 7.4h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.7 1.4 2.4-1.4 1.1a8 8 0 0 1-.1 2z"/></svg>',
    search:'<svg viewBox="0 0 24 24"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
    bell:'<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
    menu:'<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    plus:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    arrow:'<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    calendar:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
    coin:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M15 8.5c-.6-.7-1.5-1-2.8-1-1.6 0-2.7.8-2.7 2s1.1 1.8 2.7 2 2.8.8 2.8 2-1.1 2-2.8 2c-1.2 0-2.2-.4-2.9-1.2M12 5.5v13"/></svg>',
    house:'<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/></svg>',
    chevron:'<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
    edit:'<svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z"/></svg>',
    eye:'<svg viewBox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
    download:'<svg viewBox="0 0 24 24"><path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/></svg>',
    filter:'<svg viewBox="0 0 24 24"><path d="M4 7h16M7 12h10m-7 5h4"/></svg>'
  };
  const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const money = amount => new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",maximumFractionDigits:0}).format(Number(amount)||0);
  const date = value => { if(!value)return "—"; const d=new Date(value+"T00:00:00"); return Number.isNaN(d.getTime())?"—":new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"numeric"}).format(d); };
  const initials = name => String(name||"?").trim().split(/\s+/).slice(0,2).map(p=>p[0]||"").join("").toUpperCase();
  const today = () => new Date().toISOString().slice(0,10);
  const id = prefix => `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`;
  const statusClass = status => String(status||"").toLowerCase().replace(/\s+/g,"-");
  const badge = (status,label) => `<span class="status ${statusClass(status)}">${esc(label||status)}</span>`;
  const icon = name => icons[name] || "";
  const button = (label,action,kind="secondary",extra="") => `<button class="btn btn-${kind} ${extra}" data-action="${esc(action)}">${label}</button>`;
  const toast = (message,type="success") => {
    const region=document.getElementById("toast-region"); if(!region)return;
    const el=document.createElement("div"); el.className=`toast ${type==="error"?"error":""}`;
    el.innerHTML=`<span class="toast-mark">${type==="error"?"!":"✓"}</span><span>${esc(message)}</span>`;
    region.appendChild(el); setTimeout(()=>el.remove(),3500);
  };
  const csv = (filename,rows) => {
    if(!rows.length){toast("There is no data to export.","error");return;}
    const content=rows.map(row=>row.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\r\n");
    const blob=new Blob(["\ufeff"+content],{type:"text/csv;charset=utf-8;"}); const url=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);toast("CSV export prepared.");
  };
  const downloadJSON = (filename,data) => {
    const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);
    const a=document.createElement("a");a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);toast("Backup downloaded.");
  };
  const el = (tag,attrs={},html="") => { const node=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,v));node.innerHTML=html;return node; };
  return {esc,money,date,initials,today,id,statusClass,badge,icon,button,toast,csv,downloadJSON,el};
})();
