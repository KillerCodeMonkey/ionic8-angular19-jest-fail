module.exports = {
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/e2e'
  ],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  testEnvironment: 'jsdom'
}
