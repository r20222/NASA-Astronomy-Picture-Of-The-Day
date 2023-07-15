let messages = document.querySelectorAll('.messages')
const moreMessagesButton = document.querySelector('.more-messages')

let isExpanded = false;

messages.forEach(message => {
 message.classList.add('js-enabled')
})
moreMessagesButton.classList.add('js-enabled')

if(messages.length > 3){
    moreMessagesButton.classList.add('four-plus-messages')
}

moreMessagesButton.addEventListener('click', () => {
    messages.forEach(message => {
    message.classList.toggle('more-messages-clicked')
    })

    // Keert de waarde van isExpanded om:
    isExpanded = !isExpanded;
    moreMessagesButton.innerHTML = isExpanded ? "READ LESS MESSAGES 🌠" : "READ MORE MESSAGES 🌠";
})