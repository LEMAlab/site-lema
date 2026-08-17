# [Nome da Consultoria] — Site

Site institucional/de consultoria, feito em **HTML, CSS e JavaScript puros** — sem
frameworks e sem gerador de site estático (o arquivo `.nojekyll` desativa o
processamento Jekyll do GitHub Pages).

Direção visual: **clássico e premium** — navy profundo, marfim quente, dourado
discreto e verde-profundo, com detalhes em linhas finas.

## Estrutura

- `index.html` — página inicial: hero + faixa de credibilidade, sobre, serviços, como trabalhamos, depoimento, equipe, FAQ e contato.
- `projetos.html` — página de projetos/estudos de caso, em blocos colapsáveis por período.
- `style.css` — todo o estilo. Os **tokens de design** (cores, tipografia) ficam na seção `:root`, no topo do arquivo.
- `main.js` — comportamento: menu mobile, animações ao rolar, contadores e blocos colapsáveis.
- `imagens/` — coloque aqui fotos de equipe, logo etc.
- `.github/workflows/pages.yml` — publica o site automaticamente a cada push na branch `main`.

## Como personalizar

1. **Textos:** abra `index.html` e `projetos.html` e substitua tudo que estiver entre colchetes `[assim]`.
2. **Cores e fontes:** ajuste as variáveis na seção `:root`, no topo do `style.css`. Trocar `--gold`, `--forest`, `--ink` e `--paper` já muda a identidade inteira.
3. **Números do hero:** na "placa de credenciais" (`index.html`), edite o atributo `data-count` de cada linha. Use `data-suffix="+"` para mostrar um sufixo (ex: `40+`).
4. **Fotos da equipe:** troque cada `<div class="avatar">[in]</div>` por `<img class="avatar" src="imagens/foto.jpg" alt="[Nome]">`.
5. **Contato:** troque `mailto:seuemail@exemplo.com` pelo seu e-mail real ou pelo link do seu formulário (Google Forms, Typeform etc.).
6. **Banner de aviso (opcional):** no topo do `main.js`, mude `DISPONIBILIDADE_ABERTA` para `true` para exibir a faixa dourada no topo da página.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub chamado exatamente `SEU-USUARIO.github.io`
   (esse nome específico publica o site no domínio raiz).
2. Envie estes arquivos para a branch `main`.
3. Em **Settings → Pages → Source**, selecione **GitHub Actions**.
4. A cada push em `main`, o workflow em `.github/workflows/pages.yml` publica o site.
5. O site ficará em `https://SEU-USUARIO.github.io`.
