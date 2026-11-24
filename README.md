# Entre Palcos

Acervo de shows completos no YouTube e de agendas de turnês. O projeto nasceu de um pedido para reunir gravações e próximas datas dos artistas favoritos em um só lugar.

**[Acessar o site publicado](https://entre-palcos.netlify.app/)**

## O que o site oferece

- 31 gravações organizadas por artista, com acesso ao YouTube e suporte a reprodução incorporada quando o vídeo permite.
- Agenda de shows com links para ingressos ou para as datas oficiais, quando disponíveis.
- Links que abrem diretamente na aba de cada artista.
- Controle de animações com preferência salva no navegador.

## Testar no seu computador

O projeto usa HTML, CSS e JavaScript. Abra `dist/index.html` no navegador para consultar o acervo e acessar os vídeos no YouTube. Para testar a reprodução incorporada, sirva a pasta por HTTP:

```sh
python -m http.server 8000 --directory dist
```

Depois de iniciar o servidor, abra `http://localhost:8000` no mesmo computador. Para acessar a versão online de qualquer dispositivo, use o [site publicado no Netlify](https://entre-palcos.netlify.app/). A pasta de publicação é `dist/`.
