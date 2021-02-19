import { CONFIG } from './config/config';
import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`App is running at http://localhost:${process.env.PORT} in ${CONFIG.ENV_APP} mode`);
});
