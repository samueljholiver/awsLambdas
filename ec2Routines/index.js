let Rules = require("./Rules");

exports.handler = async (event) => {
  const rules = new Rules();

  switch (event.type) {
    case "up":
      await rules.startInstance(event.instance);
      break;
    case "down":
      await rules.stopInstance(event.instance);
      break;
  }
};
