const generateUniqueId = require('generate-unique-id');
const services = require('../data/services.json')

const uniqueId = generateUniqueId({
  length: 5,
  useLetters: false
})

const create = () => {}

const index = () => {}

const show = () => {}

const update = () => {}

const destroy = () => {}

const invoice = () => {}

const empty = () => {}










module.exports = {
  create,
  index,
  show,
  update,
  destroy,
  invoice,
  empty
}