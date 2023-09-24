const person = {
    nam : 'Max'
}

export const base = 10;

//using default here means that when importing this in other js code we do not need to define the name of export we want to import, we can just do like, import per './2.ExportImport.js'
export default person

//in this case we need to specify the export name because it is not a default export
//aa is alias here
import {base as aa} from './2.ExportsImports.js'