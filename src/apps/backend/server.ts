import { CONFIG } from './config/config';
import app from './app';

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`App is running at http://localhost:${app.get('port')} in ${CONFIG.ENV_APP} mode`);
});
