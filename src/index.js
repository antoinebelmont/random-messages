const messages = [
    'juan',
    'mireya',
    'raul',
    'adriana',
    'josue',
    'alucard',
    'richter',
    'dracula'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {
    randomMsg
}
