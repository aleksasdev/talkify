export class Card{
    constructor(props){
        this.props = props
        return this.render()
    }
    render(){
        console.log(this.props.title)
        this.card = document.createElement('div')
        this.card.setAttribute('class', 'card')

        this.title = document.createElement('h3')
        this.titleText = document.createTextNode(this.props.title)
        this.title.append(this.titleText)

        this.image = document.createElement('img')
        this.image.setAttribute('src', this.props.picture)
        this.image.setAttribute('alt', this.props.alt)

        this.button = document.createElement('a')
        this.button.setAttribute('href', this.props.btnLink)
        this.button.setAttribute('class', 'all_features_btn')
        this.buttonText = document.createTextNode(this.props.btnText)
        console.log(this.buttonText)
        this.button.append(this.buttonText)

        this.card.append(this.title, this.image, this.button)
        document.querySelector('#cards_container').append(this.card)

    }
}


