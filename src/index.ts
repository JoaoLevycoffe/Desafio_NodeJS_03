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
	const req1 = readlineSync.question('Ola, gostaria de saber quantos alunos tem na lista esse ano?');
	
	let listaDeAlunos = ['Andre', 'Joice', 'Lucas'];
		for (let i = 0; i <= 2; i++) {
			console.log(`i=${listaDeAlunos[i]}`)
		}
			console.log('Na lista tem 3 nomes');

	const req2 = readlineSync.question ('Quais foram suas notas?');
	let listaDeAlunos1 = ['Andre nota: 9', 'Joice, nota: 10', 'Lucas, nota: 8']
		console.log(listaDeAlunos1)


	const req3 = readlineSync.question ('Qual aluno mais se destacou?');
	let melhorNota = [
		{ nome: 'Andre', nota: 9},
		{ nome:'Joice', nota: 10},
		{ nome:'Lucas', nota: 8}
	]
		let nota = (m: { nota: number; }) => m.nota >= 10
		console.log(melhorNota.filter(nota))
	
});
