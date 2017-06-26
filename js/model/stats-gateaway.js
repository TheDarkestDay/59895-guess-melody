

const StatsGateaway = {
  url: `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/thedarkestday59895`,
  getPreviousData() {
    return fetch(this.url)
      .then((response) => response.json());
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
