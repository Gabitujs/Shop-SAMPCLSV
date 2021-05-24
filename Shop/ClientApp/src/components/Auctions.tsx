import axios from "axios";
import React, { Component, Fragment } from 'react';
import './Auctions.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';



const api = axios.create({
    baseURL: `https://localhost:5001/api/Conturi/GetAccounts`

})

const columns = [
    {
      title: 'Name',
      dataIndex: 'nume',
    },
    {
      title: 'Server',
      dataIndex: 'server',
    },
    {
      title: 'Level',
      dataIndex: 'level',
    },
    {
        title: 'Bani',
        dataIndex: 'bani',
      },
      {
        title: 'Ore',
        dataIndex: 'ore',
      },
      {
        title: 'Avertismente',
        dataIndex: 'avertismente',
      },
      {
        title: 'Factiune',
        dataIndex: 'factiune',
      },
  ];
  

interface AccountsShop {
    id: number;
    server: string;
    nume: string;
    level: number;
    bani: number;
    ore: number;
    avertismente: number;
    factiune: string;
}
type ConturiProps = {  }
type ConturiState = { accounts: AccountsShop[] }



export default class Conturi extends Component<ConturiProps, ConturiState> {
    constructor(props: any) {
        super(props);
        this.state = {
            accounts: [] 
        }
    }

    componentDidMount() {
        api.get('/').then(res => {
         this.setState({ accounts: res.data })
        })
    }



    render() {
        return (
            <Fragment>
            <Table  columns={columns} dataSource={this.state.accounts}/>
            </Fragment>
        )
    }
}