import jwt from 'jsonwebtoken';

const users = [
  {
    id: 1,
    email: 'lilaaeros@hotmail.com.ar',
    password: '123456'
  }
];

export async function login(email, password) {
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) return null;

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });

  return token;
}
