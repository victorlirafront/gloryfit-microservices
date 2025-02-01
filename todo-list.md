# Todo List do Processo de Compra em um E-commerce

## 1. Exibição do Produto
- [ ] **Renderizar lista de produtos** no frontend (Vue) a partir de uma API (Go).
- [ ] **Exibir detalhes do produto** ao clicar sobre um item na lista (Vue).
- [ ] **Carregar imagens, descrições e preços** dinamicamente da API (Go).

## 2. Adicionar ao Carrinho
- [ ] **Implementar carrinho de compras** no frontend (Vue).
  - Criar um array de itens no estado do Vue (ex: `cart[]`).
- [ ] **Adicionar produto ao carrinho** com quantidade e preço.
- [ ] **Validar se o produto está disponível em estoque**.
- [ ] **Exibir total do carrinho** dinamicamente.

## 3. Visão do Carrinho e Checkout
- [ ] **Exibir página de carrinho** com todos os itens adicionados (Vue).
- [ ] **Permitir editar a quantidade** ou remover itens.
- [ ] **Calcular o total do pedido**, incluindo frete (Go: calcular no backend).

## 4. Tela de Cadastro/Login
- [ ] **Criar tela de login/cadastro** no frontend (Vue).
- [ ] **Autenticar usuário com login** no backend (Go).
  - Usar JWT ou sessões para manter o estado da autenticação.
- [ ] **Validar dados de login e registro** (Go).

## 5. Escolher Forma de Pagamento
- [ ] **Exibir opções de pagamento** no frontend (Vue).
  - Cartão de crédito, boleto bancário, etc.
- [ ] **Integrar com API de pagamento** (Go).
  - Enviar os dados do pedido e pagamento para o gateway (ex: Stripe, PayPal).
- [ ] **Receber e validar a resposta do pagamento** (Go).
  - Confirmação de pagamento ou falha.

## 6. Confirmação do Pedido
- [ ] **Exibir página de confirmação de pedido** (Vue).
  - Mostrar os detalhes do pedido (produtos, total, etc.).
  - Mostrar o número de rastreamento do pagamento (Go).
- [ ] **Gravar pedido no banco de dados** (Go).
  - Criar uma entrada de pedido com status "pendente" ou "em processamento".

## 7. Processamento e Envio
- [ ] **Verificar estoque e preparar para envio** (Go).
  - Se tudo estiver disponível, definir o status do pedido para "em envio".
- [ ] **Atualizar o status do pedido** no banco de dados (Go).
- [ ] **Gerar etiqueta de envio**.
  - Integrar com sistema de transporte para enviar a encomenda (ex: Correios, transportadoras).
  - Gerar código de rastreamento.
- [ ] **Notificar cliente sobre o envio**.
  - Enviar e-mail ou notificação para o cliente com código de rastreamento.

## 8. Rastrear Pedido
- [ ] **Exibir rastreamento no frontend** (Vue).
  - Integrar API de rastreamento (Go) para mostrar status do envio.

## 9. Finalização e Pós-venda
- [ ] **Exibir página de agradecimento** com detalhes da compra e estimativa de entrega (Vue).
- [ ] **Implementar sistema de feedback** para avaliação do produto (Vue).
- [ ] **Garantir a política de devolução** com formulário para o cliente (Vue + Go).

---

## Fluxo Backend (Go)

### API de Produtos
- **GET /products**: Para listar produtos.
- **GET /products/{id}**: Para detalhes de um produto.

### API de Carrinho e Checkout
- **POST /cart**: Para adicionar itens ao carrinho.
- **GET /cart**: Para listar os itens no carrinho.
- **DELETE /cart/{itemId}**: Para remover itens do carrinho.

### API de Autenticação
- **POST /login**: Para autenticar o usuário.
- **POST /register**: Para registrar um novo usuário.
- **POST /logout**: Para sair da conta.

### Integração com Pagamento
- **POST /payment**: Enviar informações de pagamento para o gateway.
  - Validar resposta e retorno do gateway de pagamento (ex: Stripe, PayPal).

### API de Pedido
- **POST /order**: Criar um pedido com status "pendente".
- **GET /order/{id}**: Para buscar o status de um pedido.
- **POST /order/{id}/ship**: Para atualizar status para "enviado".

### API de Rastreio
- **GET /tracking/{trackingNumber}**: Consultar status do envio.

---

## Fluxo Frontend (Vue)

### Renderizar Lista de Produtos
- Usar **Vue Router** para navegar entre páginas (ex: página de produtos, carrinho, etc.).
- Fazer requisições `GET` para obter os produtos da API de backend.

### Carrinho de Compras
- Armazenar o carrinho no **Vuex** ou usar o estado local.
- Usar **v-for** para listar os itens no carrinho e exibir o total.
- Implementar funcionalidades de edição e remoção.

### Formulário de Checkout
- Criar um formulário para preencher os dados do usuário e método de pagamento.
- Usar **Axios** ou **Fetch** para enviar dados do pagamento para a API.

### Autenticação
- Criar telas para login e registro de usuários.
- Armazenar o token JWT ou informações de sessão no **localStorage** ou **Vuex**.

### Página de Confirmação e Rastreamento
- Exibir um resumo da compra e status de envio.
- Mostrar o código de rastreamento, se disponível.
