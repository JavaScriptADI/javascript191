const shopInventory = [
    {
        name: "Health Potion",
        price: 20,
    },
    {
        name: "Mana Potion",
        price: 15,
    },
    {
        name: "Iron Sword",
        price: 100,
    },
    {
        name: "Steel Sword",
        price: 150,
    }
];
let gold = 100

console.log(`We have ${shopInventory.length} items in our shop`);

if (prompt("Do you want to see the list of these items?").toLowerCase() === "yes") {
    for (let i = 0; i < shopInventory.length; i++) {
        console.log(`[${i}] ${shopInventory[i].name} costs ${shopInventory[i].price} Gold!`);
    }
    // Write here
    // user inputs a item index and you should check if they have enough money and make the purchase
    let item = 0;
    const selectedItem = shopInventory[item];
    if (selectedItem.price > gold) {
        console.log("You don't have enough money");
    } else {
        gold -= selectedItem.price;
        console.log(`You have left ${gold} gold`);
    }

} else {
    console.log("Ok bye");
}
