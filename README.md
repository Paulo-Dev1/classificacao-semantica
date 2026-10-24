# Classificação Semântica de Imagens 🐱🐶

Projeto desenvolvido durante a pós-graduação **Full Stack com IA da Rocketseat**, com o objetivo de explorar técnicas de Inteligência Artificial para classificação de imagens de gatos e cachorros.

A aplicação permite que o usuário envie uma imagem para análise, explorando o uso de representações vetoriais de imagens (*embeddings*) e algoritmos de aprendizado de máquina para identificar similaridades visuais.

## 🎯 Objetivo

Aplicar na prática conceitos de Inteligência Artificial, visão computacional e aprendizado de máquina, explorando como diferentes técnicas podem ser combinadas para classificar imagens.

## 🧠 Conceitos estudados

- **CLIP:** modelo utilizado para transformar imagens em representações vetoriais (*embeddings*).
- **KNN (K-Nearest Neighbors):** algoritmo de aprendizado de máquina que permite classificar dados com base na proximidade entre exemplos.
- **LLMs (Large Language Models):** modelos de linguagem que podem integrar fluxos de aplicações com Inteligência Artificial, conforme a implementação do projeto.
- **Classificação semântica:** exploração de características e similaridades representadas numericamente para apoiar a identificação de imagens.

## 🏗️ Estrutura do projeto

O repositório está organizado em duas partes principais:

- `classifier_service/` — serviço responsável pela lógica de classificação.
- `front/` — interface da aplicação para interação com o usuário.

## 🚀 Funcionalidade principal

- Envio de imagens pelo usuário.
- Análise da imagem por meio de técnicas de Inteligência Artificial.
- Exploração da classificação de imagens nas categorias de gatos e cachorros.

## 📚 Aprendizados

Este projeto faz parte da minha jornada de aprendizado em Inteligência Artificial aplicada ao desenvolvimento de software, explorando conceitos de visão computacional, embeddings, algoritmos de classificação e integração entre componentes de uma aplicação.

## ⚙️ Configuração necessária

Para executar o projeto localmente, é necessário configurar os seguintes recursos:

### 1. Embeddings de imagens

Gerar ou disponibilizar os embeddings utilizados pelo classificador para representar as características das imagens e permitir a comparação por similaridade com o algoritmo KNN.

> **Status:** pendente de configuração.

### 2. Chave da API Gemini

O projeto utiliza integração com o Gemini, que requer uma chave de API válida para funcionar.

1. Acesse o [Google AI Studio](https://aistudio.google.com/apikey).
2. Crie ou consulte uma chave de API.
3. Configure a chave no arquivo de variáveis de ambiente do serviço, conforme esperado pela aplicação.

**Importante:** não compartilhe sua chave de API nem a envie para o GitHub. Utilize variáveis de ambiente e mantenha o arquivo `.env` fora do controle de versão.

> **Status:** pendente de configuração.

### 🔐 Variáveis de ambiente

Configure as variáveis necessárias no arquivo `.env` local, de acordo com os nomes esperados pelo código do projeto. Não utilize credenciais reais no repositório.

## 👨‍💻 Autor

**Paulo Miguel**

- GitHub: [@Paulo-Dev1](https://github.com/Paulo-Dev1)

---

Desenvolvido como parte da pós-graduação Full Stack com IA da Rocketseat.
