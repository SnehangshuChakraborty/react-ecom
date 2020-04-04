import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import '../directory/directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : [{
                title: 'Fruits & Vegetables',
                imageUrl: 'https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg',
                id: 1,
                linkUrl: 'shop/fruits'
              },
              {
                title: 'groceries',
                imageUrl: 'https://cdn.pixabay.com/photo/2017/08/09/18/56/shopping-2615482_960_720.jpg',
                id: 2,
                linkUrl: 'shop/groceries'
              },
              {
                title: 'home & kitchen',
                imageUrl: 'https://cdn.pixabay.com/photo/2017/09/16/00/33/spoon-2754133_960_720.jpg',
                id: 3,
                linkUrl: 'shop/bouquets'
              },
              {
                title: 'personal care',
                imageUrl: 'https://cdn.pixabay.com/photo/2019/10/11/12/19/hair-care-4541744_960_720.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/personal'
              },
              {
                title: 'household items',
                imageUrl: 'https://cdn.pixabay.com/photo/2015/09/09/19/57/cleaning-932936_960_720.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }]
        }
    }
    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({title, imageUrl, id, size}) => (
                            <MenuItem key = {id} title = {title} imageUrl={imageUrl} size = {size}/>
                        ))
                }
            </div>
        )
    }
}

export default Directory;
