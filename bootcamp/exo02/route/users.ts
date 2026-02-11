import {user} from './model/user';
import {router} from 'express';

const app= router();

let users: User[] = [];

app.get('/',(req,res)=>{
  res.json(users);
});

app.get('/:id' , (req.res)=>{
       const user = users.find(i => i.id === number(req.params.id));
  if ( !user) return res.status(404).json({aucun user avec ce id });
res.json(user);
}

app.post('/',(req,res)=> {
 const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error});
const newuser:users = {id: users.length + 1 , name,email};
  users.push(newuser);
  res.status(201).json(newuser);

app.put('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) return res.status(404).json({ error });

    const { name, email } = req.body;
    if (name) user.name = name;
    if (email) user.email = email;

    res.json(user);
});

app.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== Number(req.params.id));
    res.status(204).send();
});

export default router;
  
}
