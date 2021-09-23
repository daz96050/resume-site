import React, {useState} from 'react';
import {TabContext, TabList} from '@mui/lab';
import {AppBar, Box, Tab} from '@mui/material';
import {useHistory} from 'react-router-dom';


export default function NavBar() {
    const [selectedItem, setSelectedItem] = useState("0");
    const history = useHistory();


    const handleChange = (event, newValue) => {
        setSelectedItem(newValue);
        history.push(`/${event.target.name}`)
    };
    const tabs = ["Home", "Resume", "About", "References", "Contact"]

    return (
        <AppBar color={'primary'} position={'relative'}>
            <Box sx={{
                width: '100%',
                typography: 'body1'
            }}>
                <TabContext value={selectedItem}>
                    <Box sx={{
                        borderBottom: 1,
                        borderColor: 'divider'
                    }}>
                        <TabList onChange={handleChange} aria-label="Navigation Tabs" centered
                                 indicatorColor={'secondary'}>
                            {tabs.map((tabName, i) => {
                                return <Tab label={tabName} value={`${i}`} name={tabName.toLowerCase()} aria-label={tabName}/>
                            })}
                        </TabList>
                    </Box>
                </TabContext>
            </Box>
        </AppBar>
    );
}
