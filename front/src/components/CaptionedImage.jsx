import { useState, useEffect } from "react";

export default function CaptionedImage({ imgSrc, method, requestId }) {
    const [category, setCategory] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setCategory(null);
        setError(null);

        const getCaption = async () => {
            try {
                const response = await fetch("http://127.0.0.1:3000/classify", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ method: method, imgPath: imgSrc })
                }).then(resp => resp.json());

                if (isMounted) {
                    setCategory(response["result"] || response["category"]);
                }
            } catch (err) {
                if (isMounted) {
                    setError("Erro ao classificar a imagem. Verifique se o servidor está rodando.");
                }
            }
        };

        getCaption();

        return () => {
            isMounted = false;
        };
    }, [imgSrc, method, requestId]);

    const emoji = category === "cat" ? "🐱" : category === "dog" ? "🐶" : "✨";
    const methodLabel = method === "knn" ? "KNN • Vector Embeddings" : "LLM • Gemini Multimodal";

    return (
        <div className={`captioned-card card-${method}`}>
            <div className="card-top-bar">
                <span className="status-indicator" />
                <span className="engine-tag">{methodLabel}</span>
            </div>

            <div className="image-wrapper">
                <img src={imgSrc} alt="Imagem enviada para classificação" className="preview-image" />
            </div>

            <div className="caption-container">
                {error ? (
                    <p className="error-message">{error}</p>
                ) : category === null ? (
                    <div className="loading-box">
                        <div className="spinner" />
                        <h2>It's a ...</h2>
                        <span className="loading-subtext">Classificando imagem com {method.toUpperCase()}...</span>
                    </div>
                ) : (
                    <div className={`result-badge result-${category}`}>
                        <span className="result-emoji">{emoji}</span>
                        <h2>It's a {category}!!!</h2>
                    </div>
                )}
            </div>
        </div>
    );
}

