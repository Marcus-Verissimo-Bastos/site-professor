# SEO - Pendências (exigem decisão sua)

## Não aplicável a este projeto
- O projeto é HTML estático, não Next.js: não há Metadata API, `sitemap.ts`, `robots.ts` nem `opengraph-image.tsx`. Os equivalentes estáticos já existem: `<head>` do index.html, `robots.txt`, `sitemap.xml`.
- Redirects www/sem www e barra final: configurados no painel do Netlify ao conectar um domínio próprio (o netlify.app já é único). Se usar domínio próprio, trocar a URL `https://jotaftv.netlify.app/` no index.html, robots.txt e sitemap.xml.

## Mudariam o visual (não feitas)
- Títulos: o logo/nome do site e alguns blocos usam `h3` onde `h2` seria mais semântico; mexer pode alterar o estilo.
- Horários, preços e depoimentos reais: adicionar ao site permitiria dados estruturados mais ricos (horário de funcionamento, preço, avaliações), mas exige conteúdo novo visível.
- Imagem OG dedicada (1200x630): hoje usa a foto do professor, que pode ser cortada ao compartilhar. Criar um arquivo novo não muda o site.
- Vídeos: legenda/transcrição visível ajudaria o Google a indexar os vídeos (VideoObject), mas adiciona texto à página.
- Imagem e fontes: não alterei `<img>`, lazy loading nem fontes, conforme pedido.
