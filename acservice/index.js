const jsonfile = require('jsonfile')
const moment = require('moment')
const simpleGit = require('simple-git')

const filePath = './data.json'

const DATE = moment().subtract(1, 'd').format()

const data = {date: DATE}
jsonfile.writeFile(filePath, data)

simpleGit().add([filePath]).commit(DATE, {'--date': DATE}).push()