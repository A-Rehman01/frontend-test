import React from "react"
import Tab from "@mui/material/Tab"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import TabContext from "@mui/lab/TabContext"
import { CircularProgress, Grid, List } from "@mui/material"
import Item from "./Item"

const CallsTab = ({ list, handleArchived }) => {
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <TabContext value={value}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Not Archived" value="1" />
        <Tab label="Archived" value="2" />
      </TabList>
      <TabPanel value="1">
        <Grid container>
          {!list.length ? (
            <Grid xs={12} textAlign="center">
              <CircularProgress />
            </Grid>
          ) : (
            <Grid xs={12}>
              <List>
                {list.map((item, index) => {
                  return !item.is_archived ? (
                    <Item
                      key={index}
                      item={item}
                      handleArchived={handleArchived}
                    />
                  ) : (
                    <></>
                  )
                })}
              </List>
            </Grid>
          )}
        </Grid>
      </TabPanel>
      <TabPanel value="2">
        <Grid container>
          {!list.length ? (
            <Grid xs={12} textAlign="center">
              <CircularProgress />
            </Grid>
          ) : (
            <Grid xs={12}>
              <List>
                {list.map((item, index) => {
                  return item.is_archived ? (
                    <Item
                      key={index}
                      item={item}
                      handleArchived={handleArchived}
                    />
                  ) : (
                    <></>
                  )
                })}
              </List>
            </Grid>
          )}
        </Grid>
      </TabPanel>
    </TabContext>
  )
}

export default CallsTab
