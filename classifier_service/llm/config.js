import { Type } from "@google/genai";
import dotenv from 'dotenv';
import { type } from "os";
dotenv.config();

//para construir o prompt e configurações de saida do nosso classificaador de imagem usando llm
const prompt = `
Identifique se a imagem contém gatos ou cachorros.
Retorne uma das seguintes categorias de acordo com o conteúdo da imagem:
'cat' caso a imagem contenha um ou mais gatos ou
'dog' caso a imagem contenha um ou mais cachorro
`

const outputConfig = {
        responseMimeType: "application/json",
        responseSchema: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    category: {
                        type: "string",
                        enum: ["dog", "cat"]
                    }
                }
            }
        }
    };

export { outputConfig, prompt };