import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export const loginForm =[
{
    id:1,
    title: "E-Mail adresi",
    type:'email',
    icon : <Feather name="mail" size={20} color="#868E96" />
},
{
    id:2,
    title: "Şifre",
    type:'password',
    icon : <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure:true,
    SecureIcon: {
        visible:<Feather name="eye" size={20} color="868E96" />,
        notVisible:<Feather name="eye-off" size={20} color="868E96" />
     },
   }
];

export const registerForm =[
    {
        id:1,
        title:"Ad",
        type:'name',
        icon:<Feather name="user" size={20} color="#868E96" />
    },
    {
        id:2,
        title: "Soyad",
        type:'surname',
        icon:<Feather name="user" size={20} color="#868E96" />
    },
    {
        id:3,
        title:"E-Mail Adresi",
        type:'email',
        icon :<Feather name="mail" size={20} color="#868E96" />
    },
    {
        id:4,
        title: "Şifre",
        type:'password',
        icon :<Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure:true, 
        SecureIcon: {
           visible:<Feather name="eye" size={20} color="868E96" />,
           notVisible:<Feather name="eye-off" size={20} color="868E96" />
        },
    },
    {
        id:5,
        title: "Şifre Tekrar",
        type:'rpassword',
        icon :<Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure:true,
        SecureIcon: {
            visible:<Feather name="eye" size={20} color="868E96" />,
            notVisible:<Feather name="eye-off" size={20} color="868E96" />
         },
    },
    
        
];

export const registerForm =[
    {
        id:1,
        title:"Ad",
        icon:<Feather name="user" size={20} color="#868E96" />
    },
    {
        id:2,
        title: "Soyad",
        icon:<Feather name="user" size={20} color="#868E96" />
    },
    {
        id:3,
        title:"E-Mail Adresi",
        icon :<Feather name="mail" size={20} color="#868E96" />
    },
    {
        id:4,
        title: "Şifre",
        icon :<Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure:true, 
        SecureIcon: <Feather name="eye" size={20} color="868E96" />

    },
    {
        id:5,
        title: "Şifre Tekrar",
        icon :<Ionicons name="key-outline" size={20} color="#868E96" />,
        isSecure:true,
        SecureIcon: <Feather name="eye" size={20} color="868E96" />

    },
    
        
];