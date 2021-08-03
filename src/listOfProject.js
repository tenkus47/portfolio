import baramomologo from './static/baramomo/logo.jpg'
import baramomoscreen from './static/baramomo/image1.jpg'
import yartsagampulogo from './static/yartsagampu/logo.JPG'
import yartsagampuscreen from './static/yartsagampu/image.JPG'

import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import StarIcon from '@material-ui/icons/Star';

export const list=[
{
    id:1,
    projectName:'Bar A momo',
    logo:baramomologo,
    screenShot2:baramomoscreen,
    link:'https://www.baramomo.xyz',
    date:'1st april 2020',
    discription:' I was the designer and front-end developer website in 2020 and worked closely with the company as it grew over, eventually becoming Lead Front-end Developer. By early 2020,we successfully raised a total investment fund of $13 million dollars.'
},
{
    id:1,
    projectName:'Yartsa gongbhu',
    logo:yartsagampulogo,
    screenShot2:yartsagampuscreen,
    link:'https://www.yartsagampu.com',
    discription:' My second successfull project as for a online store completed a Month ago. Visit to buy Yartsagongbhu and tell us your review.',
    date:'2nd june 2020',
}

]



export const sidelist=[
    {   id:0,
        name:'Home',
        icon:HomeIcon,
    },
    {
        id:1,
        name:'Speciality',
        icon:StarIcon
    },
    {id:2,
    name:'Projects',
     icon:AccountTreeIcon
    }
]