# 🎤 Entre Palcos

Escolha um artista para encontrar shows completos e consultar as próximas datas em um só lugar. O acervo reúne **31 gravações de seis artistas**: Louis Tomlinson, Jão, Taylor Swift, One Direction, Sabrina Carpenter e Olivia Rodrigo.

**[Acessar o site publicado](https://entre-palcos.netlify.app/)**

## O que o site faz

- **Show em destaque.** A abertura apresenta o *Away From Home Festival* de Louis Tomlinson, com o show e os bastidores da edição de 2021.
- **Acervo por artista.** Cada aba reúne as gravações com informações como local, ano e origem do vídeo. Dá para navegar pelas abas com o teclado.
- **Reprodução pelo YouTube.** Os vídeos que permitem incorporação podem ser assistidos no site. O link direto para o YouTube também fica disponível.
- **Agenda de turnês.** Mostra as próximas datas cadastradas, com links oficiais ou para ingressos quando disponíveis.
- **Controle de animações.** A preferência do sistema vale por padrão. É possível mudar a configuração no rodapé, e a escolha fica salva no navegador.

## Como funciona

O catálogo fica no JavaScript. Ao trocar de artista, o navegador monta os cards e a agenda daquela aba. O parâmetro `?artista=` permite compartilhar um link que já abre na seleção desejada.

As miniaturas do acervo carregam conforme se aproximam da área visível. O player do YouTube é carregado quando alguém escolhe assistir dentro do site. A agenda esconde as datas passadas automaticamente. Novas datas e gravações são adicionadas manualmente ao catálogo.

## Tecnologias e estrutura

O projeto usa **HTML, CSS e JavaScript puro**, com o player incorporado do YouTube e hospedagem no **Netlify**. A pasta de publicação é `dist/`.

| Arquivo | Função |
| --- | --- |
| [`dist/index.html`](dist/index.html) | Estrutura da página, navegação e show em destaque |
| [`dist/style.css`](dist/style.css) | Layout responsivo, tema e animações |
| [`dist/app.js`](dist/app.js) | Catálogo, agenda, abas e player |

## Testar no seu computador

Na raiz do repositório, execute o comando abaixo com o Python 3 instalado:

```sh
python -m http.server 8000 --directory dist
```

Com o servidor em execução, abra `http://localhost:8000` no mesmo computador. Para acessar de outro dispositivo ou compartilhar o projeto, use o [site publicado](https://entre-palcos.netlify.app/).

## Sobre o projeto

O Entre Palcos nasceu de um pedido para juntar gravações de shows e agendas de artistas favoritos. O foco foi facilitar a descoberta dos vídeos, organizar as datas e tornar o acervo simples de compartilhar.

## Créditos

Os vídeos e as miniaturas vêm do YouTube e pertencem aos respectivos criadores e detentores dos direitos. Os links de ingressos levam às páginas dos organizadores ou vendedores.
