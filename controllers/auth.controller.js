import * as authServicio from '../services/auth.service.js';

export async function login(req, res) {
  const { email, password } = req.body;

  // 👉 ESTE console.log nos muestra lo que llega desde Postman
  console.log('EMAIL RECIBIDO:', email);
  console.log('PASSWORD RECIBIDO:', password);

  const token = await authServicio.login(email, password);

  if (token) {
    res.json({ token });
  } else {
    res.status(401).json({ mensaje: 'Credenciales incorrectas' });
  }
}
