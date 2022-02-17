/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

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


	const readlineSync  = require ('readline-Sync') ;
	const req1 = readlineSync.question('Ola gostaria de saber quantos alunos tem na lista');
		console.log('Na lista tem 3 nomes');

	const req2 = readlineSync.question ('Qual o nome deles e suas notas?');
	const listaDeAlunos = ['Andre nota: 9', 'Joice, nota: 10', 'Lucas, nota 8']
		console.log(listaDeAlunos[0]);
		console.log(listaDeAlunos[1]);
		console.log(listaDeAlunos[2]);


	const req3 = readlineSync.question ('Qual aluno mais se destacou?');
	const melhorNota = ['Andre nota: 9', 'Joice, nota: 10', 'Lucas, nota: 8']
		console.log(melhorNota[1]);
	
});
