//selectors
const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'message one',
    'message two',
    'message three',
    'message four',
]

// event listeners

button.addEventListener('click', () => createNotification())

function createNotification() {
    const notif = document.createElement('div')
    //by createElement we can create any html element
    notif.classList.add('toast')

    notif.innerText = getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)

}
function getRandomMessage() {
     return messages[Math.floor(Math.random() * messages.length)]
     //math.random is useful to get random messages from list
     //math.floor helps to round off the no.
     //*message.length is helps to select the messages from message length
}