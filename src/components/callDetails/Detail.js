import { Grid } from "@mui/material"
import React from "react"

const Detail = ({ item, value }) => {
  return (
    <Grid
      alignItems="center"
      justifyContent="space-between"
      container
      className="detail"
    >
      <Grid item>{item}</Grid>
      <Grid item fontWeight="bold">
        {value}
      </Grid>
    </Grid>
  )
}

export default Detail
