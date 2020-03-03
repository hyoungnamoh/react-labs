const express = require('express');
const router = express.Router();
//const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");
const ffmpeg = require('fluent-ffmpeg');

let storage = multer.diskStorage({ //기본 옵션
    destination: (req, file, cb) => { //파일을 어디에 저장할지
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => { //[올린시간_파일이름] 형식으로 저장
        cb(null, `${Date.now()}_${file.originalname}`);
    },
    fileFilter: (req, file, cb) => { //mp4만 받도록 설정
        const ext = path.extname(file.originalname);
        if(ext === '.mp4'){ //mp4가 아니면 400번 에러 리턴
            return cb(res.status(400).end('only mp4 is allowed'), false);
        }
        cb(null, true);
    }
});

//multer(options)
const upload = multer({ storage: storage}).single("file"); //single 파일 한개만 올릴 수 있도록 설정

//=================================
//             Video
//=================================

//클라이언트에서 받은 비디오를 서버에 저장
//노드 서버에 파일을 저장하려면 서버 디렉토리에
//npm install multer --save
router.post('/uploadfiles', (req, res) => {
    upload(req, res, err => {
        if(err){ //에러나면 success에 false 넣어서 받는쪽에서 분기처리함
            return res.json({success: false, err});
        }
        return res.json({success: true, url: res.req.file.path, filename: res.req.file.filename}); //url 파일을 업로드하면 올라가는 upload파일 위치
    });
});

router.post('/thumbnail', (req, res) => {
    //썸네일 생성하고 비디오 러닝타임 가져오기
    ffmpeg(req.body.url)
        .on('filenames', function (filenames) {
            console.log()
        })
});

module.exports = router;