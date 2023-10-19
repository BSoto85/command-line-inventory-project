const generateUniqueId = require('generate-unique-id');
const { faker } =  require('@faker-js/faker');
const chalk = require('chalk')



const inform = console.log

const ownerInfo = (owners, ownerId) => owners.find(owner => owner.ownerId === ownerId)

const lineItem = cart => cart.map(item => `${item.itemId}: ${item.itemName}: $${(item.priceInCents/100).toFixed(2)}, qty: ${item.quantity}`).join('\n')

const totalPrice = cart => cart.reduce((acc, cur) => acc + (cur.priceInCents/100).toFixed(2) * cur.quantity, 0)


const create = (owners, ownerName) => {
  const uniqueId = generateUniqueId({
    length: 5,
    useLetters: false
  })
  const owner = {
    ownerId: uniqueId,
    fullName: ownerName,
    address: `${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state({ abbreviated: true })} ${faker.location.zipCode()}`,
    phoneNumber: faker.phone.number(),
    pets: []
  }
  owners.push(owner)
  inform(chalk.green('New owner has been added.'))
  return owners
}

const index = owners => {
  return owners.map(owner => `${owner.ownerId} ${owner.fullName}: ${owner.pets.map(pet => {
    return `${pet.name}`}).join(', ')}`).join('\n')
}

const show = (owners, ownerId) => {
  const owner = ownerInfo(owners, ownerId)
  return `${owner.ownerId} ${owner.fullName}: ${owner.pets.map(pet => {
    return `${pet.name}`}).join(', ')}`
}

const update = (owners, ownerId, petName, species) => {
  const owner = ownerInfo(owners, ownerId)
  const petId = owner.pets.length === 0 ? owner.ownerId + 'A' : owner.ownerId + String.fromCharCode(owner.pets[owner.pets.length - 1].petId.charCodeAt(5) + 1)
  const pet = {
      petId: petId,
      name: petName,
      species: species,
      age: faker.number.int({ max: 25 }),
      sex: faker.person.sex(),
      microchip: faker.datatype.boolean(),
      intact: faker.datatype.boolean()
  }
  owner.pets.push(pet)
  if(owner.pets.map(pet => Object.values(pet).includes(petName))) {
    inform(chalk.green('Pets successfully updated.'))
    return owners
  } else {
    inform(chalk.red('Error, pets were not updated.'))
    return owners
  }
}

const destroy = (owners, ownerId, petName) => {
  const owner = ownerInfo(owners, ownerId)
  const index = owner.pets.findIndex(pet => pet.name === petName)
  if(index > -1) {
    owner.pets.splice(index, 1)
    inform(chalk.green('Pet successfully removed from owner info.'))
    return owners
  } else {
    inform(chalk.red('Pet not found. No action taken.'))
    return owners
  }
}

const invoice = (services, cart, itemName, quantity) => {
  const service = services.find(service => service.itemName === itemName)
  if(service === undefined) {
    inform(chalk.red(`Service '${itemName}' cannot be found`))
    return
  }
  const item = {
    itemId: service.itemId,
    itemName: itemName,
    quantity: parseInt(quantity),
    priceInCents: service.priceInCents
  }
  cart.push(item)
  inform(chalk.green('Service added to invoice.'))
  return cart
}


const receipt = (owners, ownerId, cart) => {
  const owner = ownerInfo(owners, ownerId)
  inform(chalk.cyan(`${owner.ownerId} ${owner.fullName}`))
  inform(chalk.blue('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'))
  inform(chalk.green(lineItem(cart)))
  inform(chalk.blue('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'))
  inform(chalk.yellow(`$${totalPrice(cart)}`))
}

const empty = cart => {
  cart.length = 0
  inform(chalk.red('There are no items on this invoice.'))
  return cart
}




module.exports = {
  create,
  index,
  show,
  update,
  destroy,
  invoice,
  receipt,
  empty
}