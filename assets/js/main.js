
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault(); 


  const clientName = document.getElementById("clienteNome").value.trim();
  const clientAddress = document.getElementById("clienteEndereco").value.trim();
  const clientHouse = document.getElementById("clienteCasa").value.trim();
  const clientNumber = document.getElementById("clienteTelefone").value.trim();
  const clientRequest = document.getElementById("clientePedido").value.trim();

  const text = `*Novo Pedido:*\n\n👤 *Nome:* ${clientName}\n🏠 *Endereço:* ${clientAddress}, Nº ${clientHouse}\n📞 *Telefone:* ${clientNumber}\n📦 *Pedido:* ${clientRequest}`;

  const numberShop = "5581989126781"; //numero da loja

  const link = `https://wa.me/${numberShop}?text=${encodeURIComponent(text)}`;

  window.open(link, "_blank");
});