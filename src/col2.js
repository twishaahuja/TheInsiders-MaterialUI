<<<<<<< HEAD
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const data = [
  {
    id: 1,
    text: 'Item 1',
    imageSrc: 'https://html.com/wp-content/uploads/very-large-flamingo.jpg',
    // 'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
  },
  {
    id: 2,
    text: 'Item 2',
    imageSrc: 'https://html.com/wp-content/uploads/very-large-flamingo.jpg',
  },
  {
    id: 3,
    text: 'Item 3',
    imageSrc: 'https://html.com/wp-content/uploads/very-large-flamingo.jpg',
  },
];

function MyList2() {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar style={{
                    //   background: 'lightgray',
                      minHeight: '150px',
                      maxWidth: '33.33%',
                      width: '100%',
                    }}>
              <img src={item.imageSrc} alt={item.text} width={'150px'} />
            {/* </Avatar> */}
          </ListItemAvatar>
          {/* <ListItemText primary={item.text} /> */}
        </ListItem>
      ))}
    </List>
  );
}

export default MyList;
=======
import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

const data = [
  {
    id: 1,
    text: 'Item 1',
    imageSrc: 'https://html.com/wp-content/uploads/very-large-flamingo.jpg',
    // 'https://media.designcafe.com/wp-content/uploads/2023/01/31151510/contemporary-interior-design-ideas-for-your-home.jpg',
  },
  {
    id: 2,
    text: 'Item 2',
    imageSrc: 'https://html.com/wp-content/uploads/very-large-flamingo.jpg',
  },
  {
    id: 3,
    text: 'Item 3',
    imageSrc: 'https://html.com/wp-content/uploads/very-large-flamingo.jpg',
  },
];

function MyList2() {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id}>
          <ListItemAvatar style={{
                    //   background: 'lightgray',
                      minHeight: '150px',
                      maxWidth: '33.33%',
                      width: '100%',
                    }}>
              <img src={item.imageSrc} alt={item.text} width={'150px'} />
            {/* </Avatar> */}
          </ListItemAvatar>
          {/* <ListItemText primary={item.text} /> */}
        </ListItem>
      ))}
    </List>
  );
}

export default MyList;
>>>>>>> aa20c65aa85696cca53fe45a29bdfba3a5386575
