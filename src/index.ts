/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { NOMEM } from "dns";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

//R01

	const readlineSync  = require ('readline-Sync') 
	const nome1 = readlineSync.question('Ola, pode informar os nomes dos aprovados?: ')
	const nome2 = readlineSync.question('Proximo?: ')
	const nome3 = readlineSync.question('Proximo?: ')

//R02

	const nota1 = parseInt(readlineSync.question('Poderia informar a nota do aluno '+nome1+'?: '))
	const nota2  = parseInt(readlineSync.question(nome2+': '))
	const nota3 = parseInt(readlineSync.question(nome3+': '))

//R03

	let maior = nota1
	let nomeMaior = nome1

	if (nota2 > maior){
		maior = nota2
		nomeMaior = nome2
	}

	if (nota3 > maior){
		maior = nota3
		nomeMaior = nome3
	}	
	
	console.log('Aluno com maior foi do aluno: '+nomeMaior+' com a nota: '+maior)
		
});
