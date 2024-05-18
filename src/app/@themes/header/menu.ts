export class Menu{
    "label"?: string;
    "icon"?: string;
    "items"?: Array<Menu>;
    "command"?: any;
    "url"?: string;
    "routerLink"?: string;
}

export const menus : Array<Menu> = [
    {
        label: 'File',
        icon: "pi pi-fw pi-align-left",
        items: [
            {
                label : "CH 1",
                icon : "pi pi-fw pi-align-left"
            }, 
            {
                label : "CH 1",
                icon : "pi pi-fw pi-align-left"
            }
        ] as Array<Menu>,
    },
    {
        label: 'File 2',
        icon: "pi pi-fw pi-align-left",
    },
    {
        label: 'File 3',
        icon: "pi pi-fw pi-align-left",
    }
];

export const aboutItems : Array<Menu> = [
    {
        label : "À propos de nous",
        icon : "pi pi-info-circle",
        routerLink: "/pages/about/about-us"
        
    }, 
    {
        label : "Notre mission",
        icon : "pi pi-server",
        routerLink: "/pages/about/our-mission"
    },
    {
        label : "Les points forts de CEND",
        icon : "pi pi-thumbs-up",
        routerLink: "/pages/about/strong-points"
    },
    {
        label : "Comment ça marche?",
        icon : "pi pi-question-circle ",
        routerLink: "/pages/about/how-it-works"
    }
]
export const loginItems : Array<Menu> =[

    {
        label : "Étudiant",
        icon : "pi pi-graduation-cap",
        routerLink: "/authentication/login/student"
        
    }, 
    {
        label : "Parent",
        icon : "pi pi-users",
        routerLink: "/authentication/login/parent"
    },
    {
        label : "Tuteur",
        icon : "pi pi-user",
        routerLink: "/authentication/login/tutor"
    },
    {
        label : "Professeur",
        icon : "pi pi-user-plus",
        routerLink: "/authentication/login/teacher"
    }
]
export const registerItems : Array<Menu> =[

    {
        label : " Étudiant",
        icon : "pi pi-graduation-cap",
        routerLink: "/authentication/register/student"
        
    }, 
    {
        label : "Parent",
        icon : "pi pi-users",
        routerLink: "/authentication/register/parent"
    },
    {
        label : "Tuteur",
        icon : "pi pi-user",
        routerLink: "/authentication/register/tutor"
    },
    {
        label : "Professeur",
        icon : "pi pi-user-plus",
        routerLink: "/authentication/register/professor"
    }
]

export const navMenuButtons = {
    "connection": {
        name: "Se connecter", 
        link: "/authentication/login", 
        visibleForPages: [
            "landing",
            "about"
        ], 
        visibleForAuths: [
            "unAuthenticated"
        ]
    }
}