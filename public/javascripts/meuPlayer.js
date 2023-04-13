
// funçoes de "drag end drop" da playlist

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(data);
    const target = event.target;
    if (target.tagName === 'LI') {
        const nextElement = target.nextSibling;

        target.parentNode.insertBefore(element, nextElement);

    } else if (target.tagName === 'UL') {
        target.appendChild(element);
    }
}

const list = document.querySelector('#todo-list');
list.addEventListener('dragover', allowDrop);
list.addEventListener('drop', drop);