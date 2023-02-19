import { Container, TableProps } from "./styles";

export function Table({headers, rows, className = "table"}: TableProps) {
  return(
    <Container>
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header.key}>{header.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {headers.map(header => (
              <td key={header.key}>{row[header.key]}</td>
            ))}
          </tr>
          )
        )}
      </tbody>
    </Container>
  )
}