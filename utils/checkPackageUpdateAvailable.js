const pkg = require("../package.json");
const updateNotifier = require("update-notifier");

// Checks for available update and returns an instance
const notifier = updateNotifier({
  pkg,
  shouldNotifyInNpmScript: true,
  updateCheckInterval: 0
});

if (notifier.update && notifier.update.latest !== pkg.version) {
  const old = notifier.update.current;
  const latest = notifier.update.latest;
  const type = notifier.update.type;
  notifier.notify({
    message:
      `New ${type} version of ${pkg.name} available! ${old} -> ${latest}\n` +
      `Run ${`npm i -g ${pkg.name}`} to update!`
  });
}
