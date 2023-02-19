import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export interface TableProps {
  headers: { label: string, key: string }[];
  rows: any[];
  className?: string;
}

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 8px;
  background: ${theme.colors.shape};
  border-radius: 5px;

  th {
    color: ${theme.colors.text};
    font-weight: bold;
    padding: 16px 32px;
    text-align: left;
    line-height: 20px;
  }

  td {
    padding: 16px 32px;
    border: 0;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  tr:nth-child(odd) td {
    padding: 16px 32px;
    background: ${theme.colors.shape};
    color: ${theme.colors.text};
  }

  td:first-child,
  th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  td:last-child,
  th:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;