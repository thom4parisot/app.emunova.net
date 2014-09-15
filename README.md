# app.emunova.net

> The inevitable Heroku app to perform OAuth and CORS requests on the behalf of the user.

# Configuration

Configuration is loaded through [`nconf`](https://github.com/flatiron/nconf).

## Environment Variables

### `GITHUB_CLIENT_ID`

GitHub App Client ID.

### `GITHUB_CLIENT_SECRET`

GitHub App Client Secret.

### `EMUNOVA_DB_HOSTNAME`

Forums database hostname.

### `EMUNOVA_DB_USERNAME`

Forums database username (read-only access).

### `EMUNOVA_DB_PASSWORD`

Forums database password.

# Testing

Local testing works better on `local.emunova.net` as it relies on `httpOnly` cookie auth.