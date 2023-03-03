// ДЗ:
//
//     Винести базу даних в json.file, при створенні записувати туда нових юзерів через fs
// При створенні валідацію на імія і вік, імя повинно бути більше 2 символів, вік – не менше нуля
// На гет, пут, деліт юзерів перевірити чи такий юзер є

const express=require('express')

const userDb = require('./database/users')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT=3000

app.listen(PORT,()=>{
    console.log('server work');
})

app.get('/users',(req, res) => {
    res.json(userDb);
})


app.get('/users/:userId', (req, res) => {
    let {userId} = req.params;

    if (+userId < userDb.length){
        const user= userDb[+userId ]

        res.json(user)
    }else {
        res.json({
            message: 'We cant find this user .'
        })
    }

})

app.post('/users', (req, res) => {
    const body = req.body;

    const {name, age} = body;
    if (name.length > 2 && +age > 0) {
        userDb.push(body);

        res.json({
            message: 'User created'
        })
    } else {
        res.json({
            message: 'Name < 2 symbol or age <= 0. Write correct information.'
        })
    }
});


app.put('/users/:userId', (req, res) => {
    const newInfoUser = req.body;
    let {userId} = req.params;

    if (+userId < userDb.length) {
        userDb[userId] = newInfoUser;

        res.json({
            message: 'updated'
        })
    } else {
        res.json({
            message: 'User not found'
        })
    }

});

app.delete('/users/userId', (req, res) => {
    let {userId} = req.params;

    if (+userId< userDb.length){
        userDb.splice(+userId, 1);
        res.json({
            message: 'deleted'
        })

    }else {
        res.json({
            message: 'Write correct information'
        })
    }
});