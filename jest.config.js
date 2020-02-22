module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "<rootDir>/support/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/support/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/support/loadershim.js`],
  coverageDirectory: "<rootDir>/.coverage",
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts", "!public"],
  coveragePathIgnorePatterns: ["stories\\.tsx?"],
};
