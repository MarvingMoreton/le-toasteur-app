const { google } = require('googleapis');
const mybusiness = google.mybusiness({
  version: 'v4',
  auth: 'YOUR_API_KEY',
});

// TODO: to be used later on
async function getHighRatedReviews() {
  const response = await mybusiness.accounts.locations.reviews.list({
    parent: 'accounts/YOUR_ACCOUNT_ID/locations/YOUR_LOCATION_ID',
  });

  return response.data.reviews.filter(review => review.starRating > 4.5).slice(0, 10);
}

module.exports = getHighRatedReviews;
