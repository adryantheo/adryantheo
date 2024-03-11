import React, {useState} from "react"
import { makeStyles } from "@material-ui/core"
import { SpeedDial, SpeedDialIcon ,SpeedDialAction } from "@material-ui/lab"
import CV from "../../constants/CV.json"

const useStyles = makeStyles((theme) => ({
    speedDial: {
      position: "absolute",
      top: theme.spacing(6),
      right: theme.spacing(6),
    },
    iconColor: {
      color: theme.palette.foreground.default,
    },
}));

export const SpeedDials = () => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
      };
  
      const handleOpen = () => {
        setOpen(true);
      };
  

    const actionIcons = CV.basics.profiles.map((item)=>(
        <SpeedDialAction
         key={item.network.toLocaleLowerCase()} 
         icon={<i className={`${item.x_icon} ${classes.iconColor}`}></i>}
         tooltipTitle={item.network}
         onClick={handleClose}
         href={item.url}
         target="_blank"
         rel="noopener noreferrer"
         underline="none"
         color="inherit"
        />
    ))

    return (
        <>
          <SpeedDial
            ariaLabel="SpeedDial"
            className={classes.speedDial}
            hidden={false}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction="down"
          >
            {actionIcons}
          </SpeedDial>
        </>
      );
}