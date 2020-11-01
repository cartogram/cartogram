const logger = console;
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const TEMPLATE_DIRECTORY = "templates";

(async () => {
  logger.log("creating new day");

  try {
    const timeStamp = createTimeStamp();

    const [template] = process.argv.slice(2);
    const templateContent = await readFile(
      path.resolve(__dirname, TEMPLATE_DIRECTORY, `${template}.md`)
    );

    await writeFile(
      path.resolve(__dirname, `${timeStamp}.md`),
      `# ${timeStamp}

${templateContent}`
    );

    console.log(`new day (${timeStamp}) created`);
  } catch (error) {
    console.log(`error creating new day`);
    console.log(error);
  }
})();

function createTimeStamp(date = new Date()) {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const timestamp = normalizeTimeStamp(
    new Intl.DateTimeFormat("en-GB", options).format(date)
  );

  return timestamp;
}

function normalizeTimeStamp(ts) {
  return ts.replace(/\//g, "-").replace(/ /g, "-").replace(/,/g, "");
}
