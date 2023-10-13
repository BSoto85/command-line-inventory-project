const generateUniqueId = require('generate-unique-id');
const services = require('../data/services.json')

const uniqueId = generateUniqueId({
  length: 5,
  useLetters: false
})

const createClient = () => {}

const createPet = () => {}

const index = () => {}

const show = () => {}

const update = () => {}

const destroy = () => {}

const invoice = () => {}

const empty = () => {}










module.exports = {
  createClient,
  createPet,
  index,
  show,
  update,
  destroy,
  invoice,
  empty
}