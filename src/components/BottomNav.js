import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from '@mui/material';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,display:{xs:'block',sm:'none'}}} elevation={3}>
    <BottomNavigation value={value} onChange={handleChange} sx={{backgroundColor:'#252525'}}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon  style={{color: ' #5727A3'}}/>}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon  style={{color: ' #5727A3'}}/>}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon style={{color: ' #5727A3'}} />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon style={{color: ' #5727A3'}} />} />
    </BottomNavigation>
    </Paper>
  );
}
