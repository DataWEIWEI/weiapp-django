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
        let outer = this;
        this.ws.onmessage = function (e) {
            let data = JSON.parse(e.data);
            let uuid = data.uuid;
            if (uuid === outer.uuid) return false;

            let event = data.event;
            if (event === 'create_player') {
                outer.receive_create_player(uuid, data.username, data.photo);
            }
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

    receive_create_player(uuid, username, photo) {
        let player = new Player(
            this.playerground,
            this.playerground.width / 2 / this.playerground.scale,
            0.5,
            0.05,
            'red',
            0.15,
            'enemy',
            username,
            photo,
        );

        player.uuid = uuid;
        this.playerground.players.push(player);
    }
}