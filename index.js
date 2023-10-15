const {readJSONFile, writeJSONFile} = require('./src/helpers')
const owners = readJSONFile('./data', 'owners.json')
const {create, index, show, update, destroy, invoice, empty} = require('./src/ownerController')



const inform = console.log

const run = () => {
  let writeToFile = false
  let updatedOwners = []
  const action = process.argv[2]
  const owner = process.argv[3]
  const petName = process.argv[4]
  const species = process.argv[5]
  switch (action) {
    case 'index':
      inform(index(owners))
      break;
    case 'create':
      updatedOwners = create(owners, owner)
      writeToFile = true
      inform('New owner has been added.')
      break;
    case 'show':
      inform(show(owners, owner))
      break;
    case 'update':
      updatedOwners = update(owners, owner, petName, species)
      writeToFile = true
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
    writeJSONFile('./data', 'owners.json', updatedOwners)
  }
}

run()