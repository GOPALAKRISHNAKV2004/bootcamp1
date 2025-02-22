const users = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 28 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 35 }
  ];
  const filteredUsers = users.filter(user => user.age > 25);
  console.log(filteredUsers);
