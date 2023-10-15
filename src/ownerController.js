const generateUniqueId = require('generate-unique-id');
const { faker } =  require('@faker-js/faker');
const services = require('../data/services.json')

const uniqueId = generateUniqueId({
  length: 5,
  useLetters: false
})

const inform = console.log



const create = (owners, ownerName) => {
  const owner = {
    ownerId: uniqueId,
    fullName: ownerName,
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state({ abbreviated: true })} ${faker.location.zipCode()}`,
    phoneNumber: faker.phone.number(),
    pets: []
  }
  owners.push(owner)
  return owners
}

const index = owners => {
  return owners.map(owner => `${owner.ownerId} ${owner.fullName}: ${owner.pets.map(pet => {
    return `${pet.name}`})}`).join('\n')
}

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