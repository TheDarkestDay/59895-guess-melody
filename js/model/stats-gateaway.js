

const StatsGateaway = {
  url: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/thedarkestday59895`,
  async getPreviousData() {
    const response = await fetch(this.url);
    const previousData = await response.json();
    return previousData;
  },
  publish(statsData) {
    const headers = new Headers();
    headers.append(`Content-Type`, `application/json`);
    return fetch(this.url, {
      method: `POST`,
      body: JSON.stringify(statsData),
      headers
    });
  }
};

export default StatsGateaway;
