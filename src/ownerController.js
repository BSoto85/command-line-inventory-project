const generateUniqueId = require('generate-unique-id');
const { faker } =  require('@faker-js/faker');



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
  inform('New owner has been added.')
  return owners
}

const index = owners => {
  return owners.map(owner => `${owner.ownerId} ${owner.fullName}: ${owner.pets.map(pet => {
    return `${pet.name}`}).join(', ')}`).join('\n')
}

const show = (owners, ownerId) => {
  const owner = owners.find(owner => owner.ownerId === ownerId)
  return `${owner.ownerId} ${owner.fullName}: ${owner.pets.map(pet => {
    return `${pet.name}`}).join(', ')}`
}

const update = (owners, ownerId, petName, species) => {
  const owner = owners.find(owner => owner.ownerId === ownerId)
  let petId = owner.ownerId
  if(owner.pets.length === 0) {
    petId += String.fromCharCode(65)
  } else {
    petId += String.fromCharCode(65 + owner.pets.length)
  }
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
    inform('Pets successfully updated.')
    return owners
  } else {
    inform('Error, pets were not updated.')
    return owners
  }
}

const destroy = (owners, ownerId, petName) => {
  const owner = owners.find(owner => owner.ownerId === ownerId)
  const index = owner.pets.findIndex(pet => pet.name === petName)
  if(index > -1) {
    owner.pets.splice(index, 1)
    inform('Pet successfully removed from owner info.')
    return owners
  } else {
    inform('Pet not found. No action taken.')
    return owners
  }
}

const invoice = (services, cart, itemName, quantity) => {
  const service = services.find(service => service.itemName === itemName)
  const item = {
    itemId: service.itemId,
    itemName: itemName,
    quantity: quantity,
    price: `$${(service.priceInCents/100).toFixed(2)}`
  }
  cart.push(item)
  inform('Service added to invoice.')
  return cart
}

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