exports.handler = async (event) => {
  const raw =
    event.headers["x-forwarded-for"] ||
    event.ip ||
    "unknown";

  const ip = raw.split(",")[0].trim();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ip })
  };
};
