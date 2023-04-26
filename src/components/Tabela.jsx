import React from 'react'
import "./Tabela.css"

function Tabela() {
    return(
        <div className="tabela">
            <table>
                <tbody>
                    <tr>
                        <th>SEGUNDA</th>
                        <td>FECHADO</td>
                    </tr>
                    <tr>
                        <th>TERÇA</th>
                        <td>09:00 - 22:00</td>
                    </tr>

                    <tr>
                        <th>QUARTA</th>
                        <td>09:00 - 22:00</td>
                    </tr>

                    <tr>
                        <th>QUINTA</th>
                        <td>09:00 - 22:00</td>
                    </tr>

                    <tr>
                        <th>SEXTA</th>
                        <td>09:00 - 22:00</td>
                    </tr>

                    <tr>
                        <th>SABADO</th>
                        <td>12:00 - 22:00</td>
                    </tr>

                    <tr>
                        <th>DOMINGO</th>
                        <td>12:00 - 22:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Tabela