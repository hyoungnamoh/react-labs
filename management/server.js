const expess = require('express');
const bodyParser = require('body-parser');
const app = expess();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //데이터 주고받는 설정(json)
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '형남',
            'birthday':'961220',
            'gender':'남자',
            'job': '백수'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/1',
            'name': '형남',
            'birthday':'961220',
            'gender':'남자',
            'job': '백수'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/1',
            'name': '형남',
            'birthday':'961220',
            'gender':'남자',
            'job': '백수'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
