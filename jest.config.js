/* eslint-disable @typescript-eslint/no-require-imports */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: [
    "<rootDir>/app/**/*.{ts,tsx}",
    "<rootDir>/components/**/*.{ts,tsx}",
    "<rootDir>/lib/**/*.{ts,tsx}",
  ],
  // transform: {
  //   "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  // },
  // moduleNameMapper: {
  //   "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  // },
};

module.exports = createJestConfig(customJestConfig);
