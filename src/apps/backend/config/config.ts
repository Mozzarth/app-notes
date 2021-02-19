import { config } from 'dotenv';

if (process.env.NODE_ENV != 'production') {
  console.log('Configurando variables de entorno...');
  const con = config();
  if (con.error) {
    console.error('Ocurrio un error a la hora de configurar entorno');
    process.exit(1);
  }
}
export const CONFIG = {
  ENV_APP: process.env.NODE_ENV,
  SERVER_PORT: process.env.PORT,
};
