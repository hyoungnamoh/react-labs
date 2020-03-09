import React, {useState} from "react";
import {post} from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";


const styles = theme => ({
    hidden:{
        display: "none"
    }
});

const CustomerAdd = ({stateRefresh}) => {
    const [file, setFile] = useState(null); //바이트형 데이터
    const [userName, setUserName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [job, setJob] = useState('');
    const [fileName, setFileName] = useState(''); //얘는 파일명
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setFile(null);
        setUserName('');
        setBirthday('');
        setGender('');
        setJob('');
        setFileName('');
        setOpen(false);
    };




    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    };
    const onChangeBirthday = (e) => {
        setBirthday(e.target.value);
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };
    const onChangeJob = (e) => {
        setJob(e.target.value);
    };

    const addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', userName);
        formData.append('birthday', birthday);
        formData.append('gender', gender);
        formData.append('job', job);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        setFileName('');
        setFile(null);
        setBirthday('');
        setGender('');
        setJob('');
        setUserName('');
        return post(url, formData, config);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addCustomer()
            .then((response) => {
                stateRefresh();
                setOpen(false);
            });

    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.value);
    };

    return(
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                고객 추가하기
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>고객 추가</DialogTitle>
                <DialogContent>
                    <input className={styles.hidden} style={styles.hidden} accept="image/*" id="raised-button-file" type="file" file={file} value={fileName} onChange={handleFileChange}/><br/>
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {fileName === "" ? "프로필 이미지 선택" : fileName}
                        </Button>
                    </label>
                    <br/>
                    <TextField label="이름" type="text" name="userName" onChange={onChangeUserName} value={userName}/><br/>
                    <TextField label="생년월일" type="text" name="birthday" onChange={onChangeBirthday} value={birthday}/><br/>
                    <TextField label="성별" type="text" name="gender" onChange={onChangeGender} value={gender}/><br/>
                    <TextField label="직업" type="text" name="job" onChange={onChangeJob} value={job}/><br/><br/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                        추가
                    </Button>
                    <Button variant="outlined" color="primary" onClick={handleClose}>
                        닫기
                    </Button>

                </DialogActions>
            </Dialog>


            
            {/*<form onSubmit={handleFormSubmit}>*/}
            {/*    <h1>고객추가</h1>*/}
            {/*    */}
            {/*    고객 이름: <input type="text" name="userName" onChange={onChangeUserName} value={userName}/><br/>*/}
            {/*    생년월일: <input type="text" name="birthday" onChange={onChangeBirthday} value={birthday}/><br/>*/}
            {/*    성별: <input type="text" name="gender" onChange={onChangeGender} value={gender}/><br/>*/}
            {/*    직업: <input type="text" name="job" onChange={onChangeJob} value={job}/><br/>*/}
            {/*    <button type="submit">추가하기</button>*/}
            {/*</form>*/}
        </div>
    );
}

export default withStyles(styles)(CustomerAdd);