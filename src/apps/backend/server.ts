import { CONFIG } from './config/config';
import app from './app';

console.log({ CONFIG });
app.listen(CONFIG.SERVER_PORT, () => {
  console.log(`App is running at http://localhost:${CONFIG.SERVER_PORT} in ${process.env.NODE_ENV} mode`);
});
