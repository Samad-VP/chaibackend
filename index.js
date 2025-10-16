require('dotenv').config()

const express = require("express");

const app = express();
const port = 3000;


const githubData = {

  "login": "Samad-VP",
  "id": 217319582,
  "node_id": "U_kgDODPQIng",
  "avatar_url": "https://avatars.githubusercontent.com/u/217319582?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Samad-VP",
  "html_url": "https://github.com/Samad-VP",
  "followers_url": "https://api.github.com/users/Samad-VP/followers",
  "following_url": "https://api.github.com/users/Samad-VP/following{/other_user}",
  "gists_url": "https://api.github.com/users/Samad-VP/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Samad-VP/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Samad-VP/subscriptions",
  "organizations_url": "https://api.github.com/users/Samad-VP/orgs",
  "repos_url": "https://api.github.com/users/Samad-VP/repos",
  "events_url": "https://api.github.com/users/Samad-VP/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Samad-VP/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Abdul Samad",
  "company": null,
  "blog": "",
  "location": "kerala",
  "email": null,
  "hireable": null,
  "bio": "Aspiring MERN Stack Developer | Learning by Building | On a Mission to Join the Tech Workforce & Make an Impact",
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-06-21T08:50:11Z",
  "updated_at": "2025-10-16T07:30:34Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
        res.send('abdulsamad')
});

app.get('/login', (req, res) => {
        res.send('<h1>Please login at chai aur code</h1>');
});

app.get('/youtube', (req, res) => {
        res.send('<h2>Chai aur code</h2>');
});

app.get('/github', (req, res) => {
        res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
