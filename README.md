
# 🧾 Farmácia Simples - Página de Pedidos

Projeto de site simples e responsivo para farmácias ou pequenos negócios, onde o cliente pode selecionar produtos, preencher seus dados e gerar um pedido automaticamente pelo WhatsApp, **sem necessidade de backend ou banco de dados**.

---

## 📸 Visão Geral

![preview](https://cdn.discordapp.com/attachments/1372662378537418874/1372662394320588970/image.png?ex=682796f9&is=68264579&hm=92f5a07da4cf1e1662e0d569681488bc14266899504eb5ae43c1580f9314e9b9&) 
![preview](https://cdn.discordapp.com/attachments/1372662378537418874/1372662388024934571/image.png?ex=682796f8&is=68264578&hm=397c9eae4da6b1f1760dc588f00c5a0b30d1ed765204c0cf1cef1932c2dfa7de&)

---

## 🚀 Funcionalidades

- Layout responsivo com **Bootstrap 5**
- Menu lateral para desktop e offcanvas no mobile
- Lista de produtos separados por categorias
- Formulário com campos obrigatórios e validação
- Envio automático do pedido formatado via **WhatsApp**

---

## 📁 Estrutura de Pastas

```
📦 projeto/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── imagens/
└── README.md
```

---

## 🛠 Tecnologias Usadas

- HTML5
- CSS3 com [Bootstrap 5](https://getbootstrap.com/)
- JavaScript (vanilla)

---

## 📲 Como usar

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/seu-usuario/farmacia-simples.git
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Preencha os campos e clique em "Enviar Pedido".

---

## 📝 Personalização

- Para alterar o número da farmácia, edite a constante `numberShop` no arquivo:
  ```js
  const numberShop = "5581SEUNUMEROAQUI";
  ```
- As imagens dos produtos podem ser substituídas por links ou arquivos locais.
- Você pode adicionar novos produtos duplicando os cards dentro das seções.

---

## 📦 Exemplo de Integração com WhatsApp

```js
const link = `https://wa.me/${numberShop}?text=${encodeURIComponent(text)}`;
window.open(link, "_blank");
```

---

## 👨‍💻 Autor

**Ian Campos De Oliveira Silva**  
📍 Ipojuca - PE
