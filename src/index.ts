import { CONFIG } from './apps/backend/config/config';
import app from './apps/backend/app';

// console.log(process.env.PORT);
app.set('port', process.env.PORT);
app.listen(CONFIG.SERVER_PORT, () =>
  console.log(`Server is running on port: ${app.get('port')} in ${CONFIG.ENV_APP} mode`)
);
