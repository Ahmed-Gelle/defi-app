/** @type {import('next').NextConfig} */
const config = require('react-reveal/globals.js');


const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM(  config({ ssrFadeout: true }))