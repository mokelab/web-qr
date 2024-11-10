import { AppBar, Toolbar, Typography } from "@mui/material";

export function Screen(props: { title: string; children?: React.ReactNode }) {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      {props.children}
    </>
  );
}
