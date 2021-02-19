import { CONFIG } from './config/config';
import app from './app';

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port: ${PORT} in ${CONFIG.ENV_APP} mode`));
