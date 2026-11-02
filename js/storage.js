/* Local-only persistence. This is a front-end demo, not a secure database. */
window.RentFlowStorage = {
  key: "rentflow.data.v1",
  load() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.schemaVersion === 1 && Array.isArray(parsed.properties)) return parsed;
      }
    } catch (error) { console.warn("RentFlow storage could not be read.", error); }
    const fresh = JSON.parse(JSON.stringify(window.RentFlowSeed));
    this.save(fresh);
    return fresh;
  },
  save(data) {
    try { localStorage.setItem(this.key, JSON.stringify(data)); return true; }
    catch (error) { console.error("RentFlow storage could not be saved.", error); return false; }
  },
  reset() {
    const fresh = JSON.parse(JSON.stringify(window.RentFlowSeed));
    this.save(fresh);
    return fresh;
  }
};
