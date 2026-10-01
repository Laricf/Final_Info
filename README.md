# 🛒 Lista de Compras Full-Stack

Este repositório contém uma aplicação web responsiva desenvolvida como projeto final para o processo seletivo da Empresa Júnior. O sistema consiste em um gerenciador de lista de compras *full-stack*, permitindo o cadastro de produtos, controle de status (comprado ou não) e manipulação de imagens, com uma interface focada na experiência do usuário (UX/UI).

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando um ecossistema JavaScript moderno tanto no cliente quanto no servidor:

**Frontend (Interface e Design):**
* **React & Vite:** Construção da interface de forma modular e com *build* ultra-rápido.
* **Material UI (MUI) & Emotion:** Componentização visual, estilização avançada e responsividade para dispositivos móveis.
* **Formik & Yup:** Gerenciamento de estados de formulários e validação de dados de entrada.
* **Axios:** Integração HTTP com a API do backend.
* **HTML, CSS e JS:** Base da estruturação visual e lógica.

**Backend (Servidor e Banco de Dados):**
* **Node.js & Express:** Criação da API RESTful para gerenciar as requisições.
* **MySQL2:** Driver para conexão e execução de *queries* SQL com suporte a *Promises*.
* **Banco de Dados:** MySQL hospedado na nuvem (Clever Cloud).
* **Nodemon:** Monitoramento do servidor durante o desenvolvimento.
* **CORS:** Liberação de acessos entre domínios diferentes.

## 📂 Estrutura do Projeto

O repositório está organizado separando os recursos visuais da lógica de servidor[cite: 1]. A pasta raiz `lista_de_compras` contém a seguinte estrutura central[cite: 1]:

*   **`imagens/` e `público/`**: Diretórios dedicados para armazenar as imagens requisitadas no layout e os arquivos estáticos da interface[cite: 1].
*   **`servidor/`**: Diretório que encapsula toda a lógica de backend[cite: 1].
    *   **`config/db.js`**: Gerencia a configuração do pool de conexões com o banco de dados MySQL[cite: 1].
    *   **`controller/ControllerProduto.js`**: Centraliza a regra de negócios e as instruções SQL (CRUD) para interagir com os produtos[cite: 1].
    *   **`api.js` e `index.js`**: Arquivos de rotas e inicialização do servidor Express[cite: 1].
    *   **`package.json` e `package-lock.json`**: Gerenciadores de dependências e scripts de inicialização do projeto[cite: 1].

## ⚙️ Funcionalidades e Regras de Negócio

A aplicação atende aos requisitos do processo seletivo, implementando:
1. **Design Responsivo:** A interface se adapta a diferentes tamanhos de tela (desktop e mobile), garantindo acessibilidade em qualquer dispositivo.
2. **Controle de Produtos (CRUD):** 
   * **Listagem (`find`):** Busca todos os itens já adicionados ao banco de dados e os exibe em tela.
   * **Inserção (`insert`):** Permite adicionar novos produtos à tabela, salvando o estado desejado, como o nome do produto e seu status de compra.
   * **Remoção (`delete`):** Remove permanentemente um item específico do banco de dados quando ele não é mais necessário.
3. **Gestão de Estado de Compra:** Permite registrar e visualizar de forma clara quais itens já foram comprados e quais ainda estão pendentes, facilitando a ida ao mercado.
4. **Suporte a Imagens:** Estrutura preparada para lidar com recursos visuais e imagens de forma integrada na interface.

## 🛠️ Como Executar Localmente

### Pré-requisitos
* Node.js instalado na máquina.
* Conexão com a internet (o banco de dados está hospedado na nuvem).

### Passos para rodar a aplicação

1. Clone o repositório em sua máquina:
   ```bash
   git clone (https://github.com/Laricf/Final_Info.git)

Acesse a pasta do servidor e instale todas as dependências:

Bash
npm install
Inicie a aplicação. Como o projeto mescla scripts do Vite (frontend) e Nodemon (backend), utilize os comandos configurados:

Para rodar a interface (Frontend - Vite):

Bash
npm run dev
Para rodar a API (Backend - Node/Express):

Bash
npm run start
(Nota: Certifique-se de que a porta configurada no index.js esteja livre para rodar o servidor Express).

Desenvolvido por: Larissa Conrado de Figueiredo
