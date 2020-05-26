import dotenv from 'dotenv'
import app from './app'
import './database'

async function main() {
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}

dotenv.config();
main()