interface User {
  username: string;
  password: string;
}

export const saveUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const getUsers = (): User[] => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const login = (username: string, password: string): boolean => {
  const users = getUsers();
  return users.some(
    (user) => user.username === username && user.password === password
  );
};