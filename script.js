let user1 = 400, user2 = 5000;

let product1 = 500;

alert(` The store now has 5 products with a total value of ${product1} `);

const answer = prompt(` Wich user shopping(user1 or user2)? `);

if(answer == "user1") {
    alert(`user1 have ${user1}$`);
    user1 > product1 ? alert(` User bought products, and now user have ${user1 - product1}$ `): alert(` Not enougth money `);
} else if (answer == "user2") {
    alert(` user2 have ${user2}$ `);
    user2 > product1 ? alert(` User bought products, and now user have ${user2 - product1}$ `): alert(` Not enougth money `);
} else {
    alert("Wrong data!")
}