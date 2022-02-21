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

	const nota1 = readlineSync.question('Poderia informar a nota do aluno '+nome1+'?: ')
	const nota2  = readlineSync.question(nome2+': ')
	const nota3 = readlineSync.question(nome3+': ')


//R03

	const pergunta3 = readlineSync.question ('Deseja exibir aluno que obteve maior nota?: ')


	let maior = nota1
	let menor = nota1

	if (nota1 > maior){
		maior = nota1
	}
	if (nota2 > maior){
		maior = nota2
	}

	if (nota3 > maior){
		maior = nota3
	}	
	
	console.log('Aluno com maior foi do aluno: '+pergunta3+' com a nota: '+maior)
		
});
