class MultiPlayerSocket {
    constructor(playerground) {
        this.playerground = playerground;

        this.ws = new WebSocket('wss://app5593.acapp.acwing.com.cn/wss/multiplayer/')

        this.start();
    }

    start() {
        this.receive();
    }

    receive() {
        this.ws.onmessage = function (e) {
            let data = JSON.parse(e.data);
            console.log(data);
        }
    }

    send_create_player(username, photo) {
        let outer = this;
        this.ws.send(JSON.stringify({
            'event': 'create_player',
            'uuid': outer.uuid,
            'username': username,
            'photo': photo,

        }));
    }

    receive_create_player() {
        
    }
}