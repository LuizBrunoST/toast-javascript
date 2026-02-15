# TapToast

Biblioteca leve de notificações Toast feita em **Vanilla JavaScript**, sem dependências externas.

Simples, rápida e organizada por versões.

---

## Estrutura do Projeto

```
taptoast/
│
├── taptoast/
│   ├── v1/
│   │   ├── taptoast.js
│   │   ├── taptoast.css
│   │
│   ├── v2/
│   │   ├── taptoast.js
│   │   ├── taptoast.css
│   │
│   └── v3/
│       ├── taptoast.js
│       ├── taptoast.css
│
└── README.md
```

Cada pasta contém uma versão independente da biblioteca.

---

## Versão Atual

### v3 (Recomendada)

**Recursos**

* 100% Vanilla JavaScript
* CSS próprio
* Configuração global
* Posição configurável
* Duração configurável
* Empilhamento automático

---

## Como usar (v3)

Inclua os arquivos da pasta **v3**:

```html
<link rel="stylesheet" href="taptoast/v3/taptoast.css">
<script src="taptoast/v3/taptoast.js"></script>
```

---

## Configuração

```javascript
TapToast.config({
    position: "top-right", // top-right | top-left | bottom-right | bottom-left
    duration: 3000
});
```

---

## Uso

```javascript
TapToast.success("Sucesso!");
TapToast.error("Erro!");
TapToast.warning("Aviso!");
TapToast.info("Informação!");
```

---

## Duração personalizada

```javascript
TapToast.success("Mensagem rápida", 1000);
TapToast.error("Mensagem longa", 7000);
```

---

## Histórico de versões

### v1

* Versão inicial
* Base experimental

### v2

* Removida dependência de jQuery
* Melhorias internas

### v3

* Sistema de configuração global
* Posição configurável
* Estrutura mais limpa
* Melhor organização

---

## Licença

MIT License — uso livre para projetos pessoais e comerciais.
