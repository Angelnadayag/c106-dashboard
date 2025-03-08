function calculate() {
    let walletAmount = parseInt(document.getElementById("wallet").value);
    let RiceQty = parseInt(document.getElementById("Rice").value);
    let HotdogQty = parseInt(document.getElementById("Hotdog").value);
    let CokeQty = parseInt(document.getElementById("Coke").value);
    let CokePrice = 12.5;
    let RicePrice = 1200;
    let HotdogPrice = 300;
    let groceryTotal = (RiceQty* RicePrice) + (HotdogQty * HotdogPrice) + (CokeQty * CokePrice);
    let remainingWallet = walletAmount - groceryTotal;
    document.getElementById("groceryTotal").innerText = groceryTotal;
    document.getElementById("remainingWallet").innerText = remainingWallet;
    document.getElementById("walletAmount").innerText = walletAmount;

}

