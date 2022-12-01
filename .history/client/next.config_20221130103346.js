/** @type {import('next').NextConfig} */
import config from 'react-reveal/globals';


const withTM = require('next-transpile-modules')(['three'])
module.exports = {
  config({ ssrFadeout: true }),
  withTM()}