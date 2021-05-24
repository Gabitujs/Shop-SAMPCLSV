import axios from "axios";
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import './AddAccounts.css';


type AddAccountsProps = {}
type AddAccountsState = { server: string, nume: string, level: number, bani: number, ore: number, avertismente: number, factiune: string, numberLimitA: number, numberLimitB: number, itemAddedShow: boolean }


export default class AddAccounts extends Component<AddAccountsProps, AddAccountsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            server: "",
            nume: "",
            level: 0,
            bani: 0,
            ore: 0,
            avertismente: 0,
            factiune: "",
            numberLimitA: 9,
            numberLimitB: 2,
            itemAddedShow: false,
        }
        this.handleChanges = this.handleChanges.bind(this)
    }


    handleChanges(event: any) {
        if (event.target.id && event.target.value != null && event.target.value != undefined) {
            switch (event.target.id) {
                case "ServerTID":
                    this.setState({ server: event.target.value });
                    break;
                case "NumeTID":
                    this.setState({ nume: event.target.value });
                    break;
                case "LevelTID":
                    event.target.value = event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, this.state.numberLimitA);
                    this.setState({ level: event.target.value });
                    break;
                case "BaniTID":
                    event.target.value = event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, this.state.numberLimitA);
                    this.setState({ bani: event.target.value });
                    break;
                case "OreTID":
                    event.target.value = event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, this.state.numberLimitA);
                    this.setState({ ore: event.target.value });
                    break;
                case "AvertismenteTID":
                    event.target.value = event.target.value = Math.max(0, parseInt(event.target.value)).toString().slice(0, this.state.numberLimitB);
                    this.setState({ avertismente: event.target.value });
                    break;
                case "FactiuneTID":
                    this.setState({ factiune: event.target.value });
                    break;
                default:
                    break;
            }
        }
    }

    sendData = (event: any) => {
        event.preventDefault();
        if (this.state.server != null && this.state.bani > 0 && this.state.nume != null && this.state.level > 0) {
            axios({
                url: "https://localhost:5001/api/Conturi/AddAccount",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                },
                method: "POST",
                data: JSON.stringify({
                    server: this.state.server,
                    nume: this.state.nume,
                    level: this.state.level,
                    bani: this.state.bani,
                    ore: this.state.ore,
                    avertismente: this.state.avertismente,
                    factiune: this.state.factiune,
                })
            }).catch(error => {
                console.log(error);
            });
            this.setState({ itemAddedShow: true });
        }
        else {
            alert('Seems like you did not provide enough information, please check');
        }
    }


    refreshPage() {
        window.location.reload(false);
    }





    render() {
        var { itemAddedShow, nume } = this.state;
        return (
            <>

                {/* Add Account UI */ !itemAddedShow &&
                    <div className="AddAccounts">
                       <div className="SVG">
                       <svg width="1920" height="400" viewBox="0 0 1920 400" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 384L33.6842 368C84.2105 368 168.421 352 235.789 304C320 272 404.211 224 488.421 240C555.789 272 640 384 724.211 384C808.421 400 875.79 304 960 304C1044.21 288 1128.42 368 1195.79 384C1280 400 1364.21 368 1448.42 368C1515.79 368 1600 400 1684.21 400C1768.42 400 1835.79 368 1886.32 352L1920 320V0H1886.32C1835.79 0 1768.42 0 1684.21 0C1600 0 1515.79 0 1448.42 0C1364.21 0 1280 0 1195.79 0C1128.42 0 1044.21 0 960 0C875.79 0 808.421 0 724.211 0C640 0 555.789 0 488.421 0C404.211 0 320 0 235.789 0C168.421 0 84.2105 0 33.6842 0H0V384Z" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="516" y1="111" x2="1436" y2="104" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7A00"/>
<stop offset="1" stop-color="#FFB800"/>
</linearGradient>
</defs>
</svg>

                       </div>

                        <div>
                            <form onSubmit={this.sendData}>
                                <div>
                                
                                    <Grid style={{position: "relative", top: 250}} container spacing={3}>
                                    <Grid item xs={3}>
                                        <TextField
                                            className="Server"
                                            id="ServerTID"
                                            label="Numele Serverului"
                                            placeholder="Ex: RPG.B-zoone.Ro"
                                            value={this.state.server}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                            inputProps={{ maxLength: 12 }}
                                        />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField
                                            className="Nume"
                                            id="NumeTID"
                                            label="Nume"
                                            placeholder="Ex: Andrei"
                                            value={this.state.nume}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                            inputProps={{ maxLength: 12 }}
                                        />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField
                                            className="Level"
                                            id="LevelTID"
                                            label="Level"
                                            type="number"
                                            placeholder="Levelul Contului."
                                            value={this.state.level}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                        />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField
                                            className="Bani"
                                            id="BaniTID"
                                            label="Bani"
                                            placeholder="Banii pe care ii ai pe server."
                                            value={this.state.bani}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                            inputProps={{ maxLength: 10 }}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={2}/>
                                        <Grid item xs={3}>
                                        <TextField
                                            id="OreTID"
                                            label="Ore"
                                            placeholder="Ore pe server."
                                            value={this.state.ore}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                            inputProps={{ maxLength: 10 }}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField
                                            className="Avertismente"
                                            id="AvertismenteTID"
                                            label="Avertismente"
                                            placeholder="Avertismente primite pe server."
                                            value={this.state.avertismente}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                            inputProps={{ maxLength: 10 }}
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        </Grid>
                                        <Grid item xs={3}>
                                        <TextField
                                            className="Factiune"
                                            id="FactiuneTID"
                                            label="Factiune"
                                            placeholder="Ex: LSPD"
                                            value={this.state.factiune}
                                            onChange={this.handleChanges}
                                            variant="outlined"
                                            inputProps={{ maxLength: 12 }}
                                        />
                                        </Grid>
                                    </Grid>
                                </div>
                                <button className="Post-Button" >Posteaza!</button>
                            </form>
                        </div>
                    </div>}

                {/* Account added confirmation */
                    itemAddedShow && <div>
                      <p>  Account with name <b>{nume}</b> was successfully added to the sell list, do you want to add another account? </p>
                <button className="Yes-Button" onClick={() => this.setState({ itemAddedShow: false })}> Yes</button>
                    </div>
                }
            </>

        )


    }
}