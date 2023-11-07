# toast-javascript

Sistema de notificações em javascript.

# Modo de usar
- Adicione o w3.css.
```html
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
```
- Adicione o elemento em html.
```html
<div class="w3-display-bottomleft w3-display-bottomleft w3-block w3-padding w3-margin-bottom" id="msgbox" style="z-index:5;"></div>
```
- Adicione o jquery >= 3.6.1.
```javascript
toast.exibir('erro', 'Erro!', 'Mensagem de erro.');
toast.exibir('sucesso', 'Sucesso!', 'Mensagem de sucesso.');
toast.exibir('atencao', 'Atenção!', 'Mensagem de atenção.');
toast.exibir('', '', 'Mensagem em branco.');
```

