import * as fs from 'fs';
import * as os from 'os';

const resultsDir = 'mc-product-registration/allure-results';

// Asegurarse de que la carpeta existe
if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
}

const envData = `
OS=${os.platform()}
OS_Version=${os.release()}
Node_Version=${process.version}
Database=In-Memory (Mock)
Architecture=Clean_Hexagonal
Maintainer=Carlos Arturo Gonzalez
`;

fs.writeFileSync(`${resultsDir}/environment.properties`, envData);
console.log('✅ Allure environment properties generated.');