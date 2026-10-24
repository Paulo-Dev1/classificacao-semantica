import { useState } from 'react'
import CaptionedImage from './components/CaptionedImage'
import './App.css'

const METHOD_DESCRIPTIONS = {
    knn: "KNN (K-Vizinhos Mais Próximos): transforma a imagem em um vetor matemático (embedding) via CLIP e busca as imagens mais parecidas na nossa base de treino para decidir a classe por votação.",
    llm: "LLM (Modelo de Linguagem Multimodal): envia a imagem para a IA generativa do Google Gemini, que analisa visualmente o conteúdo da foto e responde diretamente se é um gato ou cachorro."
};

function App() {
    const [textInput, setTextInput] = useState("");
    const [selectedMethod, setSelectedMethod] = useState("knn");
    const [classificationRequest, setClassificationRequest] = useState(null);

    function classify() {
        if (!textInput || !textInput.trim()) return;

        setClassificationRequest({
            imgSrc: textInput.trim(),
            method: selectedMethod,
            requestId: Date.now()
        });
    }

    return (
        <main className="app-container">
            <header className="app-header">
                <div className="tech-badges">
                    <span className="tech-pill pill-cyan">⚡ AI Vision</span>
                    <span className="tech-pill pill-violet">🧠 CLIP Embeddings + KNN</span>
                    <span className="tech-pill pill-pink">✨ Multimodal LLM</span>
                </div>
                <div className="header-icons">🐱 ⚡ 🐶</div>
                <h1>Cat or Dog?</h1>
                <p className="subtitle">
                    Classificador inteligente de imagens usando <strong>Busca Semântica Vetorial (KNN)</strong> ou <strong>IA Generativa (LLM)</strong>
                </p>
            </header>

            {classificationRequest && (
                <CaptionedImage
                    imgSrc={classificationRequest.imgSrc}
                    method={classificationRequest.method}
                    requestId={classificationRequest.requestId}
                />
            )}

            <section className={`controls-card theme-${selectedMethod}`}>
                <div className="field-group">
                    <label htmlFor="img-url">🔗 URL da Imagem</label>
                    <input
                        id="img-url"
                        type="url"
                        placeholder="Cole aqui o link (URL) da foto de um gato ou cachorro..."
                        value={textInput}
                        onChange={e => setTextInput(e.target.value)}
                        className="url-input"
                    />
                </div>

                <div className="field-group">
                    <label htmlFor="method-select">⚙️ Motor de Inteligência Artificial</label>
                    <div className="method-Grid">
                        <button
                            type="button"
                            className={`method-tab tab-knn ${selectedMethod === 'knn' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('knn')}
                        >
                            <span className="tab-dot" />
                            <div>
                                <strong>KNN Vector Search</strong>
                                <small>CLIP Embeddings</small>
                            </div>
                        </button>
                        <button
                            type="button"
                            className={`method-tab tab-llm ${selectedMethod === 'llm' ? 'active' : ''}`}
                            onClick={() => setSelectedMethod('llm')}
                        >
                            <span className="tab-dot" />
                            <div>
                                <strong>Google Gemini LLM</strong>
                                <small>Visão Multimodal</small>
                            </div>
                        </button>
                    </div>

                    <select
                        id="method-select"
                        value={selectedMethod}
                        onChange={e => setSelectedMethod(e.target.value)}
                        className="method-select"
                    >
                        <option value="knn">KNN (K-Nearest Neighbors)</option>
                        <option value="llm">LLM (Google Gemini)</option>
                    </select>

                    <div className={`method-description desc-${selectedMethod}`}>
                        <strong>💡 Arquitetura em execução: </strong>
                        <span>{METHOD_DESCRIPTIONS[selectedMethod]}</span>
                    </div>
                </div>

                <button
                    onClick={classify}
                    disabled={!textInput.trim()}
                    className="classify-button"
                >
                    🚀 Classify!
                </button>
            </section>
        </main>
    )
}

export default App
