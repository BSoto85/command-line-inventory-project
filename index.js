const {readJSONFile, writeJSONFile} = require('./src/helpers')
const owners = readJSONFile('./data', 'owners.json')
const services = readJSONFile('./data', 'services.json')
const cart = readJSONFile('./data', 'cart.json')
const {create, index, show, update, destroy, invoice, receipt, empty} = require('./src/ownerController')



const inform = console.log

const run = () => {
  let writeToFile1 = false
  let writeToFile2 = false
  let updatedOwners = []
  let updatedCart = []
  const action = process.argv[2]
  const owner = process.argv[3]
  const service = process.argv[3]
  const pet = process.argv[4]
  const quantity = process.argv[4]
  switch (action) {
    case 'index':
      inform(index(owners))
      break;
    case 'create':
      updatedOwners = create(owners, owner)
      writeToFile1 = true
      break;
    case 'show':
      inform(show(owners, owner))
      break;
    case 'update':
      updatedOwners = update(owners, owner, pet, process.argv[5])
      writeToFile1 = true
      break;
    case 'destroy':
      updatedOwners = destroy(owners, owner, pet)
      writeToFile1 = true
      break;
    case 'invoice':
      updatedCart = invoice(services, cart, service, quantity)
      writeToFile2 = true
      break;
    case 'receipt':
      receipt(owners, owner, cart)
      break;
    case 'empty':
      updatedCart = empty(cart)
      writeToFile2 = true
      break;
    default:
      inform('There was an error.')
  }
  if(writeToFile1) {
    writeJSONFile('./data', 'owners.json', updatedOwners)
  }
  if(writeToFile2) {
    writeJSONFile('./data', 'cart.json', updatedCart)
  }
}

run()