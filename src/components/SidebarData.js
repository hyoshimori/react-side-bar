import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddCardIcon from "@mui/icons-material/AddCard";
import BackupIcon from "@mui/icons-material/Backup";
import SettingsIcon from "@mui/icons-material/Settings";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Mail",
    icon: <EmailIcon />,
    link: "/mail",
  },
  {
    title: "Analitics",
    icon: <AssessmentIcon />,
    link: "/analitics",
  },
  {
    title: "Friends",
    icon: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "Payment",
    icon: <AddCardIcon />,
    link: "/payment",
  },
  {
    title: "Upload",
    icon: <BackupIcon />,
    link: "/upload",
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
    link: "/Setting",
  },
]
