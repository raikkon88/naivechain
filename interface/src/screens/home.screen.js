import React from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            blocks:[],
            peers:[],
            text:""
        }
        this.sendBlock = this.sendBlock.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        axios.get("/peers").then(result => {
            this.setState({
                peers:result.data
            })
        })

        axios.get("/blocks").then(result => {
            this.setState({
                blocks:result.data
            })
        })
    }

    sendBlock(){
        axios.post("/mineBlock", {data: this.state.text}).then(reslt => {
            axios.get("/blocks").then(result => {
                this.setState({
                    blocks:result.data
                })
            })
        })
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    render(){
        return(
            <Grid container style={{ margin: "20px"}}>
                <Grid item xs={12}>
                    <h1>PEERS : </h1>
                    { this.state.peers.map((item, index) => {
                        return <Grid item xs={12} key={index} style={{ border: "1px solid black", padding: "20px"}} >
                            <p>Connected to : {item}</p>
                        </Grid>
                    })}
                </Grid>
                <Grid item xs={12}>
                    <h2>Add a new Block</h2>
                    <TextField fullWidth
                        id="outlined-email-input"
                        label="Put your data to send"
                        type="text"
                        name="text"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center">
                        <Button variant="contained" color="primary" onClick={this.sendBlock}>Send Data</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <h1>BLOCKS : </h1>
                        { this.state.blocks.map((item, index) =>{
                            return <Grid item xs={12} key={index} style={{ border: "1px solid black", padding: "20px"}}>
                                <p>{item.index}</p>
                                <p>{item.previousHash}</p>
                                <p>{item.timestamp}</p>
                                <p>{item.hash}</p>
                                <p>{item.data}</p>
                            </Grid>
                        })}
                    </Grid>                    
                </Grid>
            </Grid>
            
        )   
    }
}

export default Home;