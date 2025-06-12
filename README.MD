## Saudação Dinâmica com JavaScript

Este projeto é uma aplicação simples que exibe uma saudação personalizada de acordo com o horário atual do sistema, além de alterar a imagem e o fundo da página dinamicamente.

## 🚀 Funcionalidades

- Exibe "Bom dia", "Boa tarde" ou "Boa noite" conforme o horário.
- Atualiza automaticamente a cada minuto.
- Muda a imagem (`.jpg`) conforme o período do dia.
- Altera o plano de fundo com um `gradient` para cada período.

## 🛠️ Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript (DOM + Date)**

## 💡 Lógica implementada

1. Obtém o horário atual com `Date()`.
2. Identifica se é **manhã (04h–12h)**, **tarde (12h–18h)** ou **noite (18h–04h)**.
3. Exibe a saudação correta no elemento `#msg`.
4. Altera a imagem exibida e o plano de fundo com base no período.

## 📚 Aprendizados

Manipulação de DOM com JavaScript.
Uso de Date() para obter hora e minuto atuais.
Atualização automática com setInterval.
Alteração de estilo e conteúdo HTML dinamicamente.


