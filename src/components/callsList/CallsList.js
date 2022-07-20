import axios from "axios"
import React, { useEffect, useState } from "react"
import { EDIT_CALL, GET_CALLS_LIST } from "../../api"
import CustomizedSnackbar from "../snackbar/SnackBar"
import CallsTab from "./Tab"

const CallLists = () => {
  const [list, setList] = useState([])
  const [open, setOpen] = useState(false)
  const [archivedMsg, setArchivedMsg] = useState({
    msg: "",
    variant: ""
  })

  const getCallsList = async () => {
    try {
      const { data } = await axios.get(GET_CALLS_LIST)
      setList(data)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    getCallsList()
  }, [])

  const handleArchived = async (id, value) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }

      await axios.post(
        `${EDIT_CALL}/${id}`,
        {
          is_archived: value
        },
        config
      )
      setArchivedMsg({ msg: "Call Archived SuccessFully", variant: "success" })
      handleClickSnackBar()
      getCallsList()
    } catch (e) {
      console.error(e)
      setArchivedMsg({ msg: "Call Archived Faild", variant: "error" })
      handleClickSnackBar()
    }
  }

  const handleClickSnackBar = () => {
    setOpen(true)
  }

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <CallsTab list={list} handleArchived={handleArchived} />
      <CustomizedSnackbar
        open={open}
        handleCloseSnackBar={handleCloseSnackBar}
        data={archivedMsg}
      />
    </>
  )
}

export default CallLists
