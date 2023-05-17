const os = require('os');

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const tRam = totalmem() / Math.pow(1024, 3);
  const fRam = freemem() / Math.pow(1024, 3);
  const uRam = tRam - fRam;
  const usage = (uRam / tRam * 100);

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${tRam.toFixed(3)} GB`,
    FreeRAM: `${fRam.toFixed(3)} GB`,
    Usage: `${parseInt(usage)}%`
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 1000);
