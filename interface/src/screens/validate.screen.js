import React from 'react'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Validate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chain: "", 
            isValid: false,
            resultText: ""
        }
        this.setChain = this.setChain.bind(this)
        this.sendBlockChain = this.sendBlockChain.bind(this)
    }

    setChain(event){
        this.setState({
            chain: event.target.value
        })
        console.log(this.state.chain)
    }

    sendBlockChain() {
        axios.post("/validateChain", { data: this.state.chain }).then(result => {
            console.log(result)
            if(result.data){
                this.setState({
                    resultText: "És una cadena vàlida"
                })
            }
            else{
                this.setState({
                    resultText: "No és una cadena vàlida"
                })
            }
        })
        .catch(error => {
            this.setState({
                resultText: "No és ni una cadena "
            })
        })
    }

    render() {
        return(
            <Grid container style={{ margin: "20px"}}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        onChange={this.setChain}
                        margin="normal"
                        variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center">
                        <Button variant="contained" color="primary" onClick={this.sendBlockChain}>Send Data</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="center">
                        <p>{this.state.resultText}</p>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}


export default Validate;