let messages = document.querySelectorAll('.messages')
const moreMessagesButton = document.querySelector('.more-messages')
const noMessages = document.querySelector('.no-messages-yet')

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
    moreMessagesButton.innerHTML = isExpanded ? "READ LESS MESSAGES 🌠" : "READ ALL MESSAGES 🌠";
})

// no messages yet

if(messages.length === 0){
    noMessages.innerHTML = "No comments yet, be the first to leave a comment! 🛸"
} 


// popover 
elementSupportsAttribute("popover")

function elementSupportsAttribute(attribute) {
  var popover = document.querySelectorAll('#image-popover');

  popover.forEach(popover => {
    if (attribute in popover) {
      console.log(true);
  
    } else {
      console.log(false);
   popover.classList.add('popover-not-working')
    }
  })
  
};