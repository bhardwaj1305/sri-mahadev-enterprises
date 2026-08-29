export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Health check
    if (request.method === "GET" && url.pathname === "/") {
      return Response.json({
        success: true,
        message: "Sri Mahadev Enterprises API is running",
      });
    }

    // Test leads endpoint
    if (request.method === "GET" && url.pathname === "/api/leads") {
      return Response.json({
        success: true,
        message: "Leads API is working",
      });
    }

    return Response.json(
      {
        success: false,
        message: "Route not found",
      },
      { status: 404 }
    );
  },
};
