const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*.test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://otus.ru',
      show: true,
      browser: 'chromium',
      timeout: 5000,
      waitForAction: 100, // how long to wait after click, doubleClick or PressKey actions in ms.
      getPageTimeout: 30000,
      smartWait: 5000,
      waitForTimeout: 40000,
      windowSize: '1920x1080',
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'selectors'
}