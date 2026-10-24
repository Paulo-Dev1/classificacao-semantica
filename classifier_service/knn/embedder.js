import { pipeline } from "@huggingface/transformers";


//aqui a gente passa a imagem e a gente retorna o embeddings da imagem
//esse classifier do hugginface consegue receber um image path
//fazendo o padrão singleton
export default class ImageEmbedder {
    //especificação do medelo
    static task = "image-feature-extraction";
    static modelName = "Xenova/clip-vit-base-patch32";
    static dtype = "fp32";
    static pooling = "cls";
    static normalize = true;

    static pipeline = null;

    //para carregar a Instance uma vez, quando carregar o servidor
    //ai se for a primeeira vez, criamos essa pipeline. 
    //Se for a segunda vez em diante vai verificar e não vai mais criar
    static async loadInstance() {
        if (this.pipeline === null) {
            this.pipeline = await pipeline(this.task, this.modelName, { dtype: this.dtype });
        }

        return this.pipeline;
    }

    static async embedImg(imgPath) {
        const config = { pooling: this.pooling, normalize: this.normalize };
        return this.pipeline(imgPath, config).then(t => t.tolist()[0]);
    }
}