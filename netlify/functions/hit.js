exports.handler = async (event) => {
  const ip =
    event.headers["x-forwarded-for"] ||
    event.ip ||
    "unknown";

  const os = event.queryStringParameters?.os || "unknown";
  const ua = event.headers["user-agent"] || "unknown";

  console.log("NEW HIT");
  console.log("IP:", ip);
  console.log("OS:", os);
  console.log("UA:", ua);
  console.log("TIME:", new Date().toISOString());

  return {
    statusCode: 200,
    body: "ok"
  };
};
