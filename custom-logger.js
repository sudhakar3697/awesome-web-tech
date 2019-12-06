const Logger = require('simplogger');

const logger = new Logger(
  {
    console: 'console', // 'console' | 'file' | 'both'
    file: 'clips_logs.log', // log file path
    append: true, // false | true
    label: 'clips', // ''
    timestamp: 'locale', // 'clf' | 'iso' | 'locale'
    levels: ['ERROR', 'WARN', 'SUCCESS', 'INFO', 'DEBUG'], // ['ERROR', 'WARN', 'SUCCESS', 'INFO', 'DEBUG']
  },
);

module.exports = logger;


// logger.error('error msg')
// logger.warn('warning msg')
// logger.success('success msg')
// logger.info('info msg')
// logger.debug('debug msg')

// Refer: https://www.npmjs.com/package/simplogger
