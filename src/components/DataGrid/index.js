import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';

class DataGridUI extends Component {
    render() {
        let data = [];

        if (this.props.accounts.get('accounts').size > 0) {
            let accounts = this.props.accounts.get('accounts').toArray();

            for (let account of accounts) {
                data.push(account.toObject());
            }
        }

        return (
            <Table
                height={'300px'}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
            >
                <TableHeader
                    adjustForCheckbox={true}
                >
                    <TableRow>
                        <TableHeaderColumn colSpan="10" tooltip="Super Header" style={{textAlign: 'center'}}>
                            MEDIX Accounts/Tenants
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID">Tenant</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Contact</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Email">Email</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Company">Company</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Address">Address</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Plan">Plan</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Active">Active</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Country">Country</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={true}
                    deselectOnClickaway={true}
                    showRowHover={true}
                    stripedRows={true}
                >
                    {data.map( (row, index) => (
                        <TableRow key={index} selected={row.selected}>
                            <TableRowColumn>{row.tenant}</TableRowColumn>
                            <TableRowColumn>{row.first_name} {row.last_name}</TableRowColumn>
                            <TableRowColumn>{row.contact_number}</TableRowColumn>
                            <TableRowColumn>{row.email}</TableRowColumn>
                            <TableRowColumn>{row.company_name}</TableRowColumn>
                            <TableRowColumn>{row.company_address}</TableRowColumn>
                            <TableRowColumn>{row.plan}</TableRowColumn>
                            <TableRowColumn>{row.active_date}</TableRowColumn>
                            <TableRowColumn>{row.country_code}</TableRowColumn>
                            <TableRowColumn>{row.status}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter
                    adjustForCheckbox={true}
                >
                    <TableRow>
                        <TableHeaderColumn tooltip="The ID">Tenant</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Contact</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Email">Email</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Company">Company</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Address">Address</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Plan">Plan</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Active">Active</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Country">Country</TableHeaderColumn>
                        <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }
}

export default DataGridUI;