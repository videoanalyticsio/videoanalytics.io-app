if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  env: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'videoanalytics.io',
  db: process.env.MONGODB || '',
  mailgun: {
    domain: process.env.MAILGUN_DOMAIN || '',
    api: process.env.MAILGUN_API_KEY || '',
    email: process.env.MAILGUN_REPLY_EMAIL || ''
  },
  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};