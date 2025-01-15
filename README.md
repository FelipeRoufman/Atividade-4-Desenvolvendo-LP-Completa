# README

## Visão Geral do Projeto
Este projeto é uma landing page para uma loja de roupas infantis, apresentando um design responsivo e interativo. A página inclui seções como um carrossel de imagens, depoimentos de clientes, um menu de produtos e um formulário de contato.

## Como Visualizar o Projeto Localmente

### Pré-requisitos
- Navegador web (Chrome, Firefox, etc.)
- Editor de código (Visual Studio Code, etc.)
- Servidor local (opcional, mas recomendado para melhor experiência)

### Passos
1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>
2. Navegue até o diretório do projeto:
  cd nome-do-diretorio
3. Abra o arquivo index.html no navegador:
  Você pode simplesmente clicar duas vezes no arquivo index.html para abri-lo no navegador.
  Para uma melhor experiência, use uma extensão de servidor local como Live Server no Visual Studio Code.

### APIs Utilizadas
EmailJS
Descrição: EmailJS é um serviço que permite enviar emails diretamente do JavaScript sem precisar de um backend.
Uso no Projeto: Utilizado para enviar os dados do formulário de contato para um email.
Configuração:
Substitua YOUR_SERVICE_ID, YOUR_TEMPLATE_ID e YOUR_USER_ID pelos valores fornecidos pelo EmailJS.

Inicialize o EmailJS no arquivo index.html:

javascript
Copiar código
emailjs.init("YOUR_USER_ID");

### Bibliotecas Externas
## jQuery
Descrição: jQuery é uma biblioteca JavaScript rápida, pequena e rica em recursos. Facilita manipulação de documentos HTML, eventos, animação e Ajax.
Uso no Projeto: Manipulação do DOM e eventos, como o menu responsivo.

## Swiper.js
Descrição: Swiper é uma biblioteca de carrossel/slider moderna e gratuita.
Uso no Projeto: Criação do carrossel de imagens na seção de destaque.

## ScrollReveal
Descrição: ScrollReveal é uma biblioteca JavaScript que facilita a criação de animações de rolagem.
Uso no Projeto: Revelação de elementos com animações à medida que o usuário rola a página.
Font Awesome
Descrição: Font Awesome é uma biblioteca de ícones que oferece ícones vetoriais escaláveis.
Uso no Projeto: Adição de ícones de navegação e outros ícones visuais.

### Estrutura do Projeto
index.html: Arquivo principal HTML que contém a estrutura da página.
styles/: Diretório que contém todos os arquivos CSS.
styles.css: Arquivo principal de estilos que importa outros arquivos CSS.
header.css, home.css, menu.css, testimonial.css, footer.css, swiper.css, contact.css: Arquivos CSS específicos para diferentes seções da página.
scripts/: Diretório que contém todos os arquivos JavaScript.
main.js: Arquivo principal de scripts que contém a lógica do carrossel, validação de formulário e integração com EmailJS.
