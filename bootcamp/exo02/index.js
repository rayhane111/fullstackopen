import express from 'express' ;
import users from './model/users';
import patient from './model/patient';

const app = express();
const pport =3000 ;

app.use(express.json());

app.use('/users' , users);
app.use('./patients' , patient);

app.listen(port,() =>{
}
);
