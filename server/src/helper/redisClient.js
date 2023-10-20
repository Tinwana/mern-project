const Redis = require("redis");
const client = Redis.createClient({
  url: "rediss://red-ckhar16afg7c7392aos0:BVwgrvF3M9kUqRelUvPI9h6FgCOdHsMB@singapore-redis.render.com:6379",
});
module.exports = client;
