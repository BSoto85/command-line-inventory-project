const {readJSONFile, writeJSONFile} = require('./src/helpers')
const owners = readJSONFile('./data', 'owners.json')
const {createClient, createPet, index, show, update, destroy, invoice, empty} = require('./src/ownerController')



const inform = console.log

const run = () => {
  let writeToFile = false
  let updatedOwners = []
  const action = process.argv[2]
  const owner = process.argv[3]
  switch (action) {
    case 'index':
      inform()
      break;
    case 'createClient':
      inform()
      break;
    case 'createPet':
      inform()
      break;
    case 'show':
      inform()
      break;
    case 'update':
      inform()
      break;
    case 'destroy':
      inform()
      break;
    case 'invoice':
      inform()
      break;
    case 'empty':
      inform()
      break;
    default:
      inform('There was an error.')
  }
  if(writeToFile) {
    writeJSONFile('./data', 'animals.json', updatedOwners)
  }
}

run()