import * as React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"
import CallIcon from "@mui/icons-material/Call"
import { FormHelperText, Grid } from "@mui/material"
import moment from "moment"
import { useNavigate } from "react-router-dom"

export default function Item({ item, handleArchived }) {
  const navigate = useNavigate()

  const getCallDetails = () => {
    navigate(`/call-details/${item.id}`)
  }

  const callArchivedHandler = (event) => {
    event.stopPropagation()
    handleArchived(item.id, !item.is_archived)
  }
  return (
    <Grid container>
      <Grid xs={12} container justifyContent="center" className="full-date">
        <span> ------------</span>
        {moment(item?.created_at).format("MMMM, Do YYYY ")}
        <span>------------</span>
      </Grid>
      <Grid xs={12}>
        <ListItem className="item" onClick={getCallDetails}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid xs={8} item container alignItems="center">
              <ListItemAvatar>
                <Avatar>
                  <CallIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item?.to || "-"}
                secondary="tried to call on Xavier"
              />
            </Grid>
            <Grid
              item
              xs={4}
              container
              justifyContent="flex-end"
              flexDirection="column"
              alignItems="flex-end"
            >
              <Grid> {moment(item?.created_at).format("h:mm a")} </Grid>
              <Grid onClick={callArchivedHandler}>
                <FormHelperText className="archived">Archived</FormHelperText>
              </Grid>
            </Grid>
          </Grid>
        </ListItem>
      </Grid>
    </Grid>
  )
}
