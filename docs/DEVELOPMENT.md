# Guia de desenvolvimento — CineVerse

## Requisitos

- Node.js compatível com a versão do Vite no projeto.
- npm.
- Credencial da API do TMDB.

## Configuração

Na raiz do projeto, instale as dependências:

 npm install

Crie um arquivo .env na raiz:

 VITE_API_KEY=SUA_CREDENCIAL_TMDB

Utilize o formato de credencial esperado pelo serviço de API existente.

Inicie o projeto:

 npm run dev

Abra o endereço informado no terminal.

## Comandos

| Comando | Função |
|---|---|
| npm run dev | Executar em desenvolvimento |
| npm run build | Gerar build na pasta dist |
| npm run preview | Visualizar o build localmente |
| npm run lint | Verificar o código |

## Organização

- pages: telas da aplicação.
- components: componentes de interface.
- services: integração com a API.
- Mapper de detalhes: adaptação dos dados recebidos do TMDB.

Consulte os arquivos existentes para localizar o estado compartilhado e a persistência de favoritos.

## Favoritos

Armazenados no localStorage, sem login ou banco de dados.
Os dados pertencem ao navegador e podem ser removidos ao limpar os dados do site.

## Variáveis de ambiente

Não versione o arquivo .env.

Variáveis VITE_ fazem parte do frontend e ficam acessíveis no navegador. Não coloque segredos de servidor nelas.

## Antes de publicar

- Execute npm run lint e npm run build.
- Confira busca, detalhes e favoritos.
- Verifique o layout em celular e desktop.
- Configure VITE_API_KEY no ambiente de build da hospedagem.
- Confira os caminhos dos assets e o suporte às rotas do React Router.