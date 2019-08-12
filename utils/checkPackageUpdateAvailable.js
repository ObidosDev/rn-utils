const pkg = require("../package.json");
const updateNotifier = require("update-notifier");

// Checks for available update and returns an instance
const notifier = updateNotifier({
  pkg,
  shouldNotifyInNpmScript: true
});

// Notify using the built-in convenience method
notifier.notify({
  isGlobal: true
});
