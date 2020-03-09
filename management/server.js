const fs = require('fs');
const expess = require('express');
const bodyParser = require('body-parser');
const app = expess();
const port = process.env.PORT || 5001;

app.use(bodyParser.json()); //데이터 주고받는 설정(json)
app.use(bodyParser.urlencoded({extended: true}));
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();
const multer = require('multer'); //파일이름이 중복되지 않게 자동으로 이름 바꿈
const upload = multer({dest: './upload'}); //파일 저장위치

app.get('/api/customers', (req, res) => {
    connection.query(
        "select * from customer WHERE ISDELETED=0",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
});

app.use('/image', expess.static('./upload')); //사용자가 접근 해 프로필 사진을 공유할 수 있도록, 사용자가 /image로 오면 우리 서버에서에 upload폴더로 맵핑

app.post('/api/customers', upload.single('image'),(req, res) => {
    let sql = 'insert into customer values(null, ?, ?, ?, ?, ?, now(), 0)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];

    // console.log(name);
    // console.log(birthday);
    // console.log(gender);
    // console.log(job);
    // console.log(req.body);
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
            // console.log(err);
            // console.log(rows);
        }
    );
});

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET ISDELETED = 1 WHERE ID = ?';
    let params = [req.params.id];
    console.log(req);
    connection.query(sql, params,
        (err, rows, fileds) => {
        res.send(rows);
        });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
