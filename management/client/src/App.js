import React, {useEffect, useState, memo, useCallback} from 'react';
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
import CustomerAdd from "./components/CustomerAdd";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const styles = makeStyles(theme => ({
    root: {
        width: '100%',
        minWidth: 1080
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    paper:{
        marginLeft: 18,
        marginRight: 18,
    },
    tableHead:{
        fontSize: '1.0rem'
    },
    menu: {
        marginTop: 15,
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'center'
    },
}));



const App = memo(() => {
    console.log("render!")
    const [customers, setCustomers] = useState([]);
    const [completed, setCompleted] = useState(false);
    const [time, setTime] = useState(0);
    const [nextState, setNextState] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const cellList = ["번호", "이미지", "이름", "생년월일", "성별", "직업", "설정"];
    let timer;
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

    
    //고객 데이터 불러오기
    const callApi = async () => {
        const response = await fetch('/api/customers'); //경로에 접근해서
        const body = await response.json(); //json 형태로 바디에 넣어줌
        return body;
    };

    //프로그래스바 값 굴리기
    const progress = () => {
        setTime((prevTime) => {
            return prevTime+1;
        });
    };
    
    //업데이트 후 데이터 다시 불러오기
    const stateRefresh = useCallback(() => {
        setCustomers([]);
        setCompleted(false);
        setTime(0);
        setSearchKeyword('');
        callApi()
            .then(res => setCustomers(res))
            .then(() => setCompleted(true))
            .then(() => clearInterval(timer))
            .catch(err => console.log(err));
    }, []);
    
    //검색 기능
    const handleValueChange = (e) => {
        let nextState={};
        nextState[e.target.name] = e.target.value;
        setNextState(nextState);
        setSearchKeyword(e.target.value);
        // setSearchKeyword(e.target.value);
        // setNextState(e.target.value);
        console.log(e.target.value);
        console.log(nextState);
    }
    
    const classes = styles();

    //
    const filteredComponents = (data) => {
        data = data.filter((c) => { //data 를 받아 객체안에 name이라는 속성에 searchKeyword가 있으면
            return c.name.indexOf(searchKeyword) > -1; //값을 data에 저장
        });
        //걸러진 애들만 map함수를 이용 해 출력
        return data.map((c) => {
            return <Customer
                stateRefresh={stateRefresh}
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
            />
        });
    }
  return(
      <div>
          <AppBar position="static">
              <Toolbar>
                  <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="open drawer"
                  >
                      <MenuIcon />
                  </IconButton>
                  <Typography className={classes.title} variant="h6" noWrap>
                      고객관리 시스템
                  </Typography>
                  <div className={classes.search}>
                      <div className={classes.searchIcon}>
                          <SearchIcon />
                      </div>
                      <InputBase
                          placeholder="검색"
                          classes={{
                              root: classes.inputRoot,
                              input: classes.inputInput,
                          }}
                          name="searchKeyword"
                          value={searchKeyword}
                          onChange={handleValueChange}
                          inputProps={{ 'aria-label': 'search' }}
                      />
                  </div>
              </Toolbar>
          </AppBar>
          <div className={classes.menu}>
              <CustomerAdd stateRefresh={stateRefresh} />
          </div>
          <Paper className={classes.paper }>
              <Table className={classes.table}>
                  <TableHead>
                      <TableRow>
                          {cellList.map((cell) => {
                              return <TableCell className={classes.tableHead}>{cell}</TableCell>
                          })}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {completed ? filteredComponents(customers) :
                      <TableRow>
                          <TableCell colSpan="6" align="center">
                              <CircularProgress className={styles.progress} variant="determinate" value={time}/>
                          </TableCell>
                      </TableRow>
                          }
                  </TableBody>
              </Table>
         </Paper>
      </div>

  );
});

export default withStyles(styles)(App);
