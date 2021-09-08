const SerialPort = require('serialport')
const CCTalk = require('@serialport/parser-cctalk')
const port = new SerialPort('/dev/ttyUSB0')

const parser = port.pipe(new CCTalk())
parser.on('data', console.log)