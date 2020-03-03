import React, {useState} from 'react';
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from "react-dropzone";
import axios from "axios";

const {TextArea} = Input;
const { Title } = Typography;

const PrivateOptions = [
    {value: 0, label: "Private"},
    {value: 1, label: "Public"},
];
const CategoryOptions = [
    {value: 0, label: "Film & Animation"},
    {value: 1, label: "Auto & Vehicles"},
    {value: 2, label: "Music"},
    {value: 3, label: "Pets & Animations"},
];
function VideoUploadPage(props) {

    const [VideoTitle, setVideoTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Private, setPrivate] = useState('');
    const [Category, setCategory] = useState('Film & Animation');

    const onTitleChange = (e) => {
        setVideoTitle(e.currentTarget.value);
    }
    const onDescriptionChange = (e) => {
        setDescription(e.currentTarget.value);
    }
    const onCategoryChange = (e) => {
        setCategory(e.currentTarget.value);
    }
    const onPrivateChange = (e) => {
        setPrivate(e.currentTarget.value);
    }
    const onDrop = (files) => {
        let formData = new FormData();
        const config = { //파일 보낼 때 컨텐트 타입을 설정해서 보내줘야함
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append("file", files[0]);
        console.log(files);
        axios.post('/api/video/uploadfiles', formData, config)
            .then(response => {
                if(response.data.success){
                    console.log(response.data);
                    let variable= {
                        url: response.data.url,
                        fileName: response.data.filename
                    }
                    axios.post('/pai/video/thumbnail', variable)
                        .then(response => {
                            if(response.data.success){

                            } else{
                                alert('썸네일 생성 실패');
                            }
                        })
                }else{
                    alert('실패');
                }
            });
    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
            <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                <Title levle={2}>Upload Video</Title>
            </div>

            <Form onSubmit>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    {/*Drop zone*/}
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                 {...getRootProps()}
                            >
                                <input {...getInputProps()} />
                                <Icon type="plus" style={{ fontSize: '3rem' }} />

                            </div>
                        )}
                    </Dropzone>

                    {/*Thumbnail*/}
                    <div>
                        <img src alt/>
                    </div>
                </div>
                <br/>
                <br/>
                <Input
                    onChange
                    value/>

                <br/>
                <br/>

                <label>Title</label>
                <br/>
                <input
                    onChange={onTitleChange}
                    value={VideoTitle}
                />
                <br/>
                <br/>

                <label>Description</label>
                <br/>
                <TextArea
                    onChange={onDescriptionChange}
                    value={Description}
                />
                <br/>
                <br/>

                <select onChange={onPrivateChange}>
                    {PrivateOptions.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}
                </select>
                <br/>
                <br/>
                <select onChange={onCategoryChange}>
                    {CategoryOptions.map((item, index) => (
                        <option key={index} value={item.value}>{item.label}</option>
                    ))}

                </select>
                <br/>
                <br/>
                <Button type="primary" size="large" onClick>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default VideoUploadPage;