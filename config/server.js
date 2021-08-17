module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron: { enabled: false },
  url: env('API_URL', 'https://localhost:1337'),
  admin: {
    autoOpen: false,
    auth: {
      secret: env('ADMIN_JWT_SECRET', '00db7f1ed805ed9a74655cf3e7681fb6'),
    },
  },
});
