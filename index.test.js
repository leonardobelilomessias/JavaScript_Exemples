const { rejects, deepEqual } = require('assert');
const {error} = require('./src/constants');
const File = require('./src/file');
(async ()=>{
 /* {  const filePath = './mocks/emptyfile-invalid.csv'
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
    const result =  File.csvToJson(filePath)
    await rejects(result,rejection)
  }
    {
      const filePath = './mocks/fourItens-invalid.csv'
      const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
      const result =  File.csvToJson(filePath)
      await rejects(result,rejection)
    }
   */ 
   {
      const filePath = './mocks/trheeItens-valid.csv'
      const filePath2 = './mocks/fourItens-invalid.csv'
      const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
      const result =   await File.csvToJson(filePath)

      const expect = [
        {
          "name": "Erick",
          "id": 123,
          "profession": "intrutor",
          "birthday": 1997
        },
        {
          "name": "xuxu da silva",
          "id": 312,
          "profession": "javascript specialist",
          "birthday": 2002
        },
        {
          "name": "joãozinho",
          "id": 321,
          "profession": "JavaDeveloper",
          "birthday": 1992
        }
      ]
     deepEqual(JSON.stringify(result),JSON.stringify(expect))
     //console.log(result)
    }
})()
