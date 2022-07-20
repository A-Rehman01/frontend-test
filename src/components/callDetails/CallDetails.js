import { CircularProgress, Grid, Typography } from "@mui/material"
import axios from "axios"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GET_CALL_DETAILS } from "../../api"
import Detail from "./Detail"

const CallDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState("")

  const getCallDetails = async () => {
    try {
      const { data } = await axios.get(`${GET_CALL_DETAILS}/${id}`)
      setDetails(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getCallDetails()
  }, [id])

  return (
    <Grid container className="details">
      {!details ? (
        <Grid item xs={12} textAlign="center">
          <CircularProgress />
        </Grid>
      ) : (
        <Grid item xs={12} container>
          <Typography variant="h6" textAlign="center">
            Call Details
          </Typography>
          <Detail
            item="Date"
            value={moment(details?.created_at).format("MMMM, Do YYYY ") || "-"}
          />
          <Detail item="Call Type" value={details?.call_type || "-"} />
          <Detail item="Direction" value={details?.direction || "-"} />
          <Detail item="Duration" value={details?.duration || "-"} />
          <Detail item="From" value={details?.from || "-"} />
          <Detail
            item="Is Archived"
            value={details?.is_archived ? "yes" : "no"}
          />
        </Grid>
      )}
    </Grid>
  )
}

export default CallDetails
