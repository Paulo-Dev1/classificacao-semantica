import fs from "fs";
import knnClassifier from "./classifier.js";
import ImageEmbedder from "./embedder.js";

let knowledgeBase = null;
//para carregar os nosso e verificar quais estão mais pertos vizinhos 
async function init(){
    const embeddings = JSON.parse(fs.readFileSync("./knn/embeddings.json"));
    knowledgeBase = embeddings.filter(e => e["split"] === "train");
    await ImageEmbedder.loadInstance();
}

//aqui importamos 
//dado um path e um k ele consegue classificar nossa imagem
async function classify(path, k){
   return knnClassifier(path, k, knowledgeBase);
}

//vamos exportar nossas funções
export { classify, init };