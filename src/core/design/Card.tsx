import { Card } from "@mui/material";

export function QRCard(props: {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return <Card style={props.style}>{props.children}</Card>;
}
