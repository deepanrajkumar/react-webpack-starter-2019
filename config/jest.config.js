module.exports = {
  rootDir: "../",
  testPathIgnorePatterns: ["node_modules", "config"],
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/config/enzyme-conf.js"],
  transform: { "^.+\\.js$": "<rootDir>/node_modules/babel-jest" },
  automock: false,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/js/**/*.{js,jsx}"],
  unmockedModulePathPatterns: [
    "react",
    "react-dom",
    "react-addons-test-utils",
    "enzyme"
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/fileMock.js",
    "\\.(css|less)$": "<rootDir>/config/styleMock.js"
  },
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 65,
      lines: 70,
      statements: 70
    }
  }
};
