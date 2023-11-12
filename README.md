# Toast-JavaScript

O Toast-JavaScript é um sistema de notificações desenvolvido em JavaScript para exibir mensagens de erro, sucesso, atenção e outras mensagens informativas em seu site. Este guia descreve como integrar e utilizar o sistema de notificações Toast-JavaScript em seu projeto.

## Requisitos

Antes de começar a usar o Toast-JavaScript, certifique-se de atender aos seguintes requisitos:

1. **w3.css**: O Toast-JavaScript requer o framework de estilo w3.css. Certifique-se de incluir a folha de estilo w3.css em seu projeto. Você pode adicionar o link para a folha de estilo no cabeçalho de sua página HTML, conforme mostrado abaixo:

   ```html
   <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
   ```

2. **jQuery >= 3.6.1**: O Toast-JavaScript depende da biblioteca jQuery. Verifique se você tem o jQuery instalado em sua aplicação. Você pode incluir o jQuery adicionando o seguinte código no cabeçalho da sua página HTML:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
   ```

## Instalação

Para começar a utilizar o Toast-JavaScript em seu projeto, siga os passos abaixo:

1. Inclua a folha de estilo w3.css em seu arquivo HTML, caso ainda não o tenha feito:

   ```html
   <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
   ```

2. Adicione o elemento HTML onde as notificações serão exibidas. O elemento deve ter as seguintes classes e estilos:

   ```html
   <div class="w3-display-bottomleft w3-display-bottomleft w3-block w3-padding w3-margin-bottom" id="msgbox" style="z-index:5;"></div>
   ```

3. Inclua o jQuery em seu arquivo HTML, se ainda não o tiver feito:

   ```html
   <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
   ```

4. Agora você está pronto para utilizar o Toast-JavaScript em seu projeto.

## Uso

O Toast-JavaScript permite exibir notificações de erro, sucesso, atenção e outras mensagens informativas em sua aplicação. Para exibir uma notificação, utilize o seguinte código JavaScript:

```javascript
toast.exibir('erro', 'Erro!', 'Mensagem de erro.');
toast.exibir('sucesso', 'Sucesso!', 'Mensagem de sucesso.');
toast.exibir('atencao', 'Atenção!', 'Mensagem de atenção.');
toast.exibir('', '', 'Mensagem em branco.');
```

O método `toast.exibir()` aceita três argumentos:

1. **Tipo da notificação**: Pode ser 'erro', 'sucesso', 'atencao' ou uma string vazia para uma mensagem em branco.

2. **Título da notificação**: Este é o título que aparecerá na notificação.

3. **Conteúdo da notificação**: Esta é a mensagem informativa que será exibida na notificação.

Com essas etapas concluídas, você estará pronto para utilizar o Toast-JavaScript em seu projeto, fornecendo notificações elegantes e informativas aos seus usuários.

## DEMO 
[Testar](https://luizbrunost.github.io/toast-javascript/)
