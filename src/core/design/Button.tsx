import { Button } from "@mui/material";

export function QRButton(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <Button onClick={props.onClick}>{props.children}</Button>;
}
