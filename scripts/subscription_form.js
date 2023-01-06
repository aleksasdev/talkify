document.querySelector('#subscription_form').addEventListener('submit', e => {
    e.preventDefault()
    console.log(e)

    let email1 = e.target.elements.email.value
    let username1 = e.target.elements.username.value
    let password1 = e.target.elements.password.value
    let bmonth1 = e.target.elements.month.value
    let bday1 = e.target.elements.day.value
    let byear1 = e.target.elements.year.value
    let ToS_PP1 = e.target.elements.ToF_PP.checked
    let email_subscription1 = e.target.elements.email_subscription.checked

    fetch ('http://localhost:3000/subscribers', {

        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            email : email1,
            username : username1,
            password : password1,
            birthdate : {day : bday1, month : bmonth1, year : byear1},
            ToS_PP : ToS_PP1,
            email_subscription : email_subscription1
        })
    })

    .then (res => res.json())
    .then (data => console.log(data))
})