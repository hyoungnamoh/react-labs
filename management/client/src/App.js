import React, {useEffect, useState, memo, useRef} from 'react';
import './App.css';
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto" //x축으로 overflow 허용
    },
    table:{
        minWidth: 1080 //최소크기
    },
    progress: {
        margin: theme.spacing.unit * 2
    }
});



const App = memo(() => {
    const [customers, setCustomers] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [time, setTime] = useState(0);
    useEffect(() => {
        let timer = setInterval(() => {
            progress();
        }, 20);
        callApi()
            .then(res => setCustomers(res))
            .then(() => setCompleted(true))
            .then(() => clearInterval(timer))
            .catch(err => console.log(err));
    }, []);

    const callApi = async () => {
        console.log("hi")
        const response = await fetch('/api/customers'); //경로에 접근해서
        const body = await response.json(); //json 형태로 바디에 넣어줌
        return body;
    }

    const progress = () => {
        setTime((prevTime) => {
            return prevTime+1;
        });
    }
  return(
      <Paper className={styles.root }>
          <Table className={styles.table}>
              <TableHead>
                  <TableRow>
                      <TableCell>번호</TableCell>
                      <TableCell>이미지</TableCell>
                      <TableCell>이름</TableCell>
                      <TableCell>생년월일</TableCell>
                      <TableCell>성별</TableCell>
                      <TableCell>직업</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {completed ? customers.map( c => {
                      return <Customer
                          key={c.id}
                          id={c.id}
                          name={c.name}
                          image={c.image}
                          birthday={c.birthday}
                          gender={c.gender}
                          job={c.job}
                      />
                  }) :
                  <TableRow>
                      <TableCell colSpan="6" align="center">
                          <CircularProgress className={styles.progress} variant="determinate" value={time}/>
                      </TableCell>
                  </TableRow>
                      }
              </TableBody>
          </Table>
      </Paper>
  );
});

export default withStyles(styles)(App);
