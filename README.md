# Github OAuth Proxy Server 

A simple proxy server to use with Github OAuth for authentication and get user data using Github API.


## How it works

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

#### Running the server (Backend)

```bash

# Clone this repository
$ git clone git@github.com:bfukumori/github-oauth-proxy.git

# Access the project folder in your terminal
$ cd github-oauth-proxy

# Install the dependencies
$ npm install

# Create an OAuth App in Github get the environment variables following the example in .env.example.
# More info in: https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps

# Run the application in development mode
$ npm start

# The server will open on the port: 4000 - go to http://localhost:4000/

```

---
