module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: env(
          "DATABASE_URI",
          "mongodb+srv://aswinsprojects:d5qj4Bh8Z7zFfEOZ@cluster0.0tejhhr.mongodb.net/"
        ),
      },
      options: {
        ssl: true,
      },
    },
  },
});
