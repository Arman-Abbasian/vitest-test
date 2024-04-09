export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/__test__/__ mocks __/fileMock.js",
  },
  setupFiles: ["text-encoding-utf-8", "fast-text-encoding", "jest-canvas-mock"],
  // other Jest configurations...
  testEnvironmentOptions: {
    customExportConditions: [""],
  },
};
