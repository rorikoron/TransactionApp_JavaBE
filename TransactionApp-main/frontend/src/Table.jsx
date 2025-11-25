import styled from "styled-components";


const StyledTable = styled.table`
    thead{
        background-color: #4d9bc1;
        position: sticky;
        font-size: 22px;
    }
    tr{
    }
    thead th{
        border: 1px solid #e6f1f6;
        padding: 12px 14px;
    }
    tbody td{
        border: 1px solid #e6f1f6;
        padding: 14px 14px;
    }

`

export default function Table({tableHeader, tableData}) {
    return(
        <StyledTable>
            <thead>
                <tr>
                    {tableHeader.map(header => (<th>{header}</th>))}
                </tr>
            </thead>
            <tbody>
                {
                    tableData
                    .map((tableRow) => (
                        
                        <tr>
                            {
                                Object.values(tableRow).map((data) => (<td>{data}</td>))
                            }
                        </tr>

                    ))
                }
            </tbody>
        </StyledTable>
    )
}