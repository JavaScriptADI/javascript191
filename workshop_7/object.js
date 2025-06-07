const item = {
    name: "sword",
    price: 100,
    description: "This is an iron sword",
    damage: 20
};

// console.log(item["name"]);
console.log(item.name);
item.type = "Magical";
console.log(item);

delete item.type;
console.log(item);

item.price *= 1.1;
console.log(item);

item.description = item.description.replace(" iron", "");

console.log(item.description);

