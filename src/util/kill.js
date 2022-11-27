import kill from 'kill-port';
import 'dotenv/config';

kill(process.env.PORT, 'tcp')
    .then(console.log(`Killed port ${process.env.PORT}`))