import { CONFIG } from './apps/backend/config/config';
import app from './apps/backend/app';

console.log(process.env.PORT);
app.listen(CONFIG.SERVER_PORT, () =>
  console.log(`Server is running on port: ${CONFIG.SERVER_PORT} in ${CONFIG.ENV_APP} mode`)
);
