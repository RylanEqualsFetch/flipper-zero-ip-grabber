exports.handler = async (event) => {
  const raw =
    event.headers["x-forwarded-for"] ||
    event.ip ||
    "unknown";

  const ip = raw.split(",")[0].trim();

  const os = event.queryStringParameters?.os || "unknown";
  const ua = event.headers["user-agent"] || "unknown";

  // Logs (for you)
  console.log("NEW HIT");
  console.log("IP:", ip);
  console.log("OS:", os);
  console.log("UA:", ua);
  console.log("TIME:", new Date().toISOString());

  // Response (for the page)
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ip,
      os,
      ua
    })
  };
};
