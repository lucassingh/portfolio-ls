const projects = [
    {
        id: "bizit-global",
        title: "Bizit Global",
        src: "img-1.png",
        srcMobile: 'img-1.png',
        color: "#000000",
        link: "https://www.bizitglobal.com/"
    },
    {
        id: "sembrando-valores",
        title: "Sembrando Valores",
        src: "img-2.png",
        srcMobile: 'img-2.png',
        color: "#8C8C8C",
        link: "https://sembrandovalores.net/"
    },
    {
        id: "why-cruise-disney",
        title: "Why Cruise Disney",
        src: "img-9.png",
        srcMobile: 'img-9.png',
        color: "#706D63",
        link: "https://disneycruise.disney.go.com/why-cruise-disney/"
    },
    {
        id: "rentas-cordoba",
        title: "Rentas Córdoba",
        src: "img-10.png",
        srcMobile: 'img-10.png',
        color: "#8C8C8c",
        link: "https://www.rentascordoba.gob.ar/inicio/"
    },
    {
        id: "fizzi-soda",
        title: "Fizzi Soda",
        src: "img-3.png",
        srcMobile: 'img-3.png',
        color: "#EFE8D3",
        link: "https://fizzi-landing-omega.vercel.app/",
        cards: [
            {
                id: 1,
                title: 'About Project',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                bgColor: '#fbc1d4'
            },
            {
                id: 2,
                title: 'Technologies Used',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                bgColor: '#c3abff'
            },
            {
                id: 3,
                title: 'Challenge and Solutions',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                bgColor: '#FAFAFA'
            },
            {
                id: 4,
                title: 'Key Features',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                bgColor: '#fed35b'
            },
            {
                id: 5,
                title: 'Visit Project',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
                text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                bgColor: '#95deff'
            },
        ]
    },
    {
        id: "game-landing",
        title: "Game landing",
        src: "img-4.png",
        srcMobile: 'img-4.png',
        color: "#000000",
        link: "https://game-landing-lilac.vercel.app/"
    },
    {
        id: "iphone-landing",
        title: "Iphone Landing",
        src: "img-5.png",
        srcMobile: 'img-5.png',
        color: "#706D63",
        link: "https://iphone-landing-ruby.vercel.app/"
    },
    {
        id: "suburbia-skate-shop",
        title: "Suburbia Skate Shop",
        src: "img-6.png",
        srcMobile: 'img-6.png',
        color: "#000000",
        link: "https://suburbia-landing-6d17.vercel.app/"
    },
    {
        id: "sass-landing",
        title: "Sass Landing",
        src: "img-7.png",
        srcMobile: 'img-7.png',
        color: "#8C8C8C",
        link: "https://sass-landing-mu.vercel.app/"
    },
    {
        id: "3d-portfolio",
        title: "3D Portfolio",
        src: "img-8.png",
        srcMobile: 'img-8.png',
        color: "#EFE8D3",
        link: "https://portfolio-island.vercel.app/"
    },
];

export default function handler(req, res) {
    res.status(200).json(projects);
}
