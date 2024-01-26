/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    RPC_URL_1: process.env.RPC_URL_1,
    RPC_URL_42: process.env.RPC_URL_42,
  },
};
