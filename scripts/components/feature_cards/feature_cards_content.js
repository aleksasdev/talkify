import { Card } from "./feature_cards.js"

let cards =[ 
    new Card({
        title: 'From clips to pics, share away with bigger file uploads',
        picture: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534f7cda178e9b4cc8c_Project-Speedy-Uploader-Static.svg',
        alt: 'Feature1',
        btnLink: 'index.html',
        btnText: 'Plačiau',
    }),
    new Card({
        title: 'Stream apps and games in sweet, sweet HD',
        picture: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534b85e9008c06d873d_Project-Speedy-Streaming-Static.svg',
        alt: 'feature2',
        btnLink: 'index.html',
        btnText: 'Plačiau',
    }),
    new Card({
        title: 'Hype and meme with custom emoji anywhere',
        picture: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf5348529b3789de63d3c_Project-Speedy-Emoji-Static.svg',
        alt: 'feature3',
        btnLink: 'index.html',
        btnText: 'Plačiau',
    }),
    new Card({
        title: 'Unlock perks for your communities with 2 Server Boosts',
        picture: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/633bf534f1f0854923a8e9c1_Frame%20881.svg',
        alt: 'feature4',
        btnLink: 'index.html',
        btnText: 'Plačiau',
    }),
    ]

document.querySelector('#cards_container').append(cards)