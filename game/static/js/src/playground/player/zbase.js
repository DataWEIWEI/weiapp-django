class Player extends AcGameObject {
    constructor(playground, x, y, radius, color, speed, character, username, photo) {
        super();

        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.damage_x = 0;
        this.damage_y = 0;
        this.damage_speed = 0;
        this.move_length = 0;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.character = character;
        this.username = username;
        this.photo = photo;
        this.eps = 0.01;
        this.friction = 0.9;
        // this.spent_time = 0;     // invincible time
        this.fireballs = [];

        this.cur_skill = null;

        if (this.character !== 'robot') {
            this.img = new Image();
            this.img.src = this.photo;
        }

        if (this.character === 'me') {
            this.fireball_coldtime = 1;
            this.fireball_img = new Image();
            this.fireball_img.src = 'https://app5593.acapp.acwing.com.cn/static/image/skill/fireball.png'

            this.blink_coldtime = 4;
            this.blink_img = new Image();
            this.blink_img.src = 'https://app5593.acapp.acwing.com.cn/static/image/skill/blink.png'
        }

        // default image
        this.default_img = new Image();
        this.default_img.src = 'https://app5593.acapp.acwing.com.cn/static/image/player/%E6%98%9F%E9%87%8E%E9%9C%B2%E6%AF%94.jpg'
        // 黑川赤音：https://app5593.acapp.acwing.com.cn/static/image/player/%E9%BB%91%E5%B7%9D%E8%B5%A4%E9%9F%B3.jpg
        // 星野露比：https://app5593.acapp.acwing.com.cn/static/image/player/%E6%98%9F%E9%87%8E%E9%9C%B2%E6%AF%94.jpg
        // 有马加奈: https://app5593.acapp.acwing.com.cn/static/image/player/%E6%9C%89%E9%A9%AC%E5%8A%A0%E5%A5%88.jpg
    }

    start() {
        this.playground.player_count++;
        this.playground.notice_board.write('ready players: ' + this.playground.player_count);

        if (this.playground.player_count >= 3) {
            this.playground.state = 'fighting';
            this.playground.notice_board.write('Fighting');
        }

        if (this.character === 'me') {
            this.add_listening_events();
        } else if (this.character === 'robot') {
            let tx = Math.random() * this.playground.width / this.playground.scale;
            let ty = Math.random() * this.playground.height / this.playground.scale;
            this.move_to(tx, ty);
        }
    }

    add_listening_events() {
        let outer = this;

        this.playground.game_map.$canvas.on('contextmenu', function () {
            return false;
        });

        this.playground.game_map.$canvas.mousedown(function (e) {
            if (outer.playground.state !== 'fighting')
                return true;

            const rect = outer.ctx.canvas.getBoundingClientRect();
            if (e.which === 3) {
                let tx = (e.clientX - rect.left) / outer.playground.scale;
                let ty = (e.clientY - rect.top) / outer.playground.scale;
                outer.move_to(tx, ty);

                if (outer.playground.mode === 'multi mode') {
                    outer.playground.mps.send_move_to(tx, ty);
                }
            } else if (e.which === 1) {

                let tx = (e.clientX - rect.left) / outer.playground.scale;
                let ty = (e.clientY - rect.top) / outer.playground.scale;
                if (outer.cur_skill === "fireball") {
                    if (outer.fireball_coldtime > outer.eps)
                        return false;

                    let fireball = outer.shoot_fireball(tx, ty);

                    if (outer.playground.mode === 'multi mode') {
                        outer.playground.mps.send_shoot_fireball(tx, ty, fireball.uuid);
                    }
                } else if (outer.cur_skill === 'blink') {
                    if (outer.blink_coldtime > outer.eps)
                        return false;

                    outer.blink(tx, ty);
                    if (outer.playground.mode === 'multi mode') {
                        outer.playground.mps.send_blink(tx, ty);
                    } this
                }

                outer.cur_skill = null;
            }
        });

        this.playground.game_map.$canvas.keydown(function (e) {
            if (e.which === 13) {   // enter
                if (outer.playground.mode === 'multi mode') {   // open chat field
                    outer.playground.chat_field.show_input();
                    return false;
                }
            } else if (e.which === 27) {    // esc
                if (outer.playground.mode === 'multi mode') {   // close chat field
                    outer.playground.chat_field.hide_input();
                    return false;
                }
            }

            if (outer.playground.state !== 'fighting')
                return true;


            if (e.which === 81) {   // q
                if (outer.fireball_coldtime > outer.eps)
                    return true;

                outer.cur_skill = "fireball"
                return false;
            } else if (e.which === 70) {    // f  
                if (outer.blink_coldtime > outer.eps)
                    return true;

                outer.cur_skill = "blink";
            }
        });
    }

    shoot_fireball(tx, ty) {
        let x = this.x, y = this.y;
        let radius = 0.01;
        let angle = Math.atan2(ty - this.y, tx - this.x)
        let vx = Math.cos(angle), vy = Math.sin(angle);
        let color = "orange";
        let speed = 0.5;
        let move_length = 1;

        let fireball = new FireBall(this.playground, this,
            x, y, radius, vx, vy, color, speed, move_length, 0.01);
        this.fireballs.push(fireball);

        this.fireball_coldtime = 1;

        return fireball;
    }

    destory_fireball(uuid) {
        for (let i = 0; i < this.fireballs.length; i++) {
            let fireball = this.fireballs[i];
            if (fireball.uuid === uuid) {
                fireball.destory();
                break;
            }
        }
    }

    blink(tx, ty) {
        let d = this.get_dist(this.x, this.y, tx, ty);
        d = Math.min(d, 0.8);
        let angle = Math.atan2(ty - this.y, tx - this.x);
        this.x += d * Math.cos(angle);
        this.y += d * Math.sin(angle);

        this.blink_coldtime = 4;
        this.move_length = 0;
    }

    get_dist(x1, y1, x2, y2) {
        let dx = x1 - x2;
        let dy = y1 - y2;
        return Math.sqrt(dx * dx + dy * dy);
    }

    move_to(tx, ty) {
        this.move_length = this.get_dist(this.x, this.y, tx, ty);
        let angle = Math.atan2(ty - this.y, tx - this.x);
        this.vx = Math.cos(angle);
        this.vy = Math.sin(angle);
    }

    is_attack(angle, damage) {
        for (let i = 0; i < 20 + Math.random() * 10; i++) {
            let x = this.x, y = this.y;
            let radius = this.radius * Math.random() * 0.1;
            let angle = Math.PI * 2 * Math.random();
            let vx = Math.cos(angle), vy = Math.sin(angle);
            let color = this.color;
            let speed = this.speed * 5;
            let move_length = this.radius * Math.random() * 5;

            new Particle(this.playground, x, y, radius, vx, vy, color, speed, move_length);
        }

        this.radius -= damage;
        if (this.radius < this.eps) {
            this.destory();
            return false;
        }
        this.damage_x = Math.cos(angle);
        this.damage_y = Math.sin(angle);
        this.damage_speed = damage * 100;
        this.speed *= 1.3;

    }

    receive_attack(x, y, angle, damage, ball_uuid, attacker) {
        attacker.destory_fireball(ball_uuid);
        this.x = x;
        this.y = y;
        this.is_attack(angle, damage);
    }

    update() {
        this.update_win();

        if (this.character === 'me' && this.playground.state === 'fighting')
            this.update_coldtime();
        this.update_move();

        this.render();
    }

    update_win() {
        if (this.playground.state === 'fighting' && this.character === 'me' && this.playground.players.length === 1) {
            this.playground.state === 'over';
            this.playground.score_board.win();
        }
    }

    update_coldtime() {
        this.fireball_coldtime -= this.timedelta / 1000;
        this.fireball_coldtime = Math.max(this.fireball_coldtime, 0);

        this.blink_coldtime -= this.timedelta / 1000;
        this.blink_coldtime = Math.max(this.blink_coldtime, 0);

    }

    update_move() { // update player movement
        // this.spent_time += this.timedelta / 1000;
        // if (this.spent_time < 5) {}

        if (this.character === 'robot' && Math.random() < 2 / 180.0) {
            let player = this.playground.players[Math.floor(Math.random() * this.playground.players.length)];
            let tx = player.x + player.speed * this.vx * this.timedelta / 1000 * 1;
            let ty = player.y + player.speed * this.vy * this.timedelta / 1000 * 1;
            this.shoot_fireball(tx, ty);
        }

        if (this.damage_speed > this.eps) {
            this.vx = this.vy = 0;
            this.move_length = 0;
            this.x += this.damage_x * this.damage_speed * this.timedelta / 1000;
            this.y += this.damage_y * this.damage_speed * this.timedelta / 1000;
            this.damage_speed *= this.friction;
        } else if (this.move_length < this.eps) {
            this.move_length = 0;
            this.vx = this.vy = 0;
            if (this.character === 'robot') {
                let tx = Math.random() * this.playground.width / this.playground.scale;
                let ty = Math.random() * this.playground.height / this.playground.scale;
                this.move_to(tx, ty);
            }
        } else {
            let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
            // console.log(this.vx, this.vy);
            this.x += this.vx * moved;
            this.y += this.vy * moved;
            this.move_length -= moved;
        }
    }


    render() {
        let scale = this.playground.scale;


        if (this.character !== 'robot') {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.clip();
            this.ctx.drawImage(this.img, (this.x - this.radius) * scale, (this.y - this.radius) * scale, this.radius * 2 * scale, this.radius * 2 * scale);
            this.ctx.restore();
        } else {
            // this.ctx.beginPath();
            // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            // this.ctx.fillStyle = this.color;
            // this.ctx.fill();

            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.arc(this.x * scale, this.y * scale, this.radius * scale, 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.clip();
            this.ctx.drawImage(this.default_img, (this.x - this.radius) * scale, (this.y - this.radius) * scale, this.radius * 2 * scale, this.radius * 2 * scale);
            this.ctx.restore();
        }

        if (this.character === 'me' && this.playground.state === 'fighting') {
            this.render_skill_coldtime();
        }
    }

    render_skill_coldtime() {
        let x = 1.5, y = 0.9, r = 0.04;
        let scale = this.playground.scale;

        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.fireball_img, (x - r) * scale, (y - r) * scale, r * 2 * scale, r * 2 * scale);
        this.ctx.restore();

        if (this.fireball_coldtime > 0) {
            this.ctx.beginPath();
            this.ctx.moveTo(x * scale, y * scale);
            this.ctx.arc(x * scale, y * scale, r * scale, 0 - Math.PI / 2, Math.PI * 2 * (1 - this.fireball_coldtime / 1) - Math.PI / 2, false);
            this.ctx.moveTo(x * scale, y * scale);
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fill();
        }

        x = 1.62, y = 0.9, r = 0.04;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(x * scale, y * scale, r * scale, 0, Math.PI * 2, false);
        this.ctx.stroke();
        this.ctx.clip();
        this.ctx.drawImage(this.blink_img, (x - r) * scale, (y - r) * scale, r * 2 * scale, r * 2 * scale);
        this.ctx.restore();

        if (this.blink_coldtime > 0) {
            this.ctx.beginPath();
            this.ctx.moveTo(x * scale, y * scale);
            this.ctx.arc(x * scale, y * scale, r * scale, 0 - Math.PI / 2, Math.PI * 2 * (1 - this.blink_coldtime / 4) - Math.PI / 2, false);
            this.ctx.moveTo(x * scale, y * scale);
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            this.ctx.fill();
        }

    }

    on_destory() {
        if (this.character === 'me' && this.playground.state === 'fighting') {
            this.playground.state = 'over';
            this.playground.score_board.lose();
        }

        for (let i = 0; i < this.playground.players.length; i++) {
            if (this.playground.players[i] === this) {
                this.playground.players.splice(i, 1);
                break;
            }
        }
    }
}