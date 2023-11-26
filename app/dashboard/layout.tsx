"use client"
import React from 'react'
import Sidebar from '../(components)/SideNav'
import Header from '../(components)/Header'
import { Grid } from '@mui/material'

function DashboardLayout({children}) {
  return (
    <Grid  >
    <Header/>
    <Sidebar/>
    {children}
    </Grid>
  )
}

export default DashboardLayout