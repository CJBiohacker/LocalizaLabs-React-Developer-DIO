// EventEmmiter no JavaScript
// O 'EventEmmiter' é uma classe definida e exposta pelo módulo 'events' do 'Node.js'. Com esta classe é possível fazer um método alternativo de programação assíncrona.

const EventEmitter = require('events');                             // Importação da Classe 'EventEmmiter' da biblioteca Nodejs

class Usuario extends EventEmitter {
    usuarioLogado(data) {
        setTimeout(() => {
            this.emit('Usuário logado', data);
        }, 1500);
    }
}

const usuario = new Usuario();

usuario.on('Usuário logado', data => {
    console.log(data);
});

usuario.usuarioLogado({ user: 'Carlos Junior' });
usuario.usuarioLogado({ user: 'Koichi Hirose' });

// const emitter = new EventEmitter();

// emitter.on('User logged', data => {
//     console.log(data);
// });

// emitter.emit('User logged', { user: 'Carlos Junior' });

