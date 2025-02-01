const users = [
    { firstName: "Alice", lastName: "Johnson", points: 120 },
    { firstName: "Bob", lastName: "Smith", points: 99 },
    { firstName: "Charlie", lastName: "Brown", points: 180 }
];
const members = users.map(function (user) {
    if (user.points > 100) {
        stat = 'Premium'
    } else {
        stat = 'Standard'
    }
    return {
        fullname: `${user.firstName} ${user.lastName}`,
        membershipStatus: stat
    }
})
