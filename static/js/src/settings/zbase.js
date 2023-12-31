class Settings {
    constructor(root) {
        this.root = root;
        this.platform = 'WEB';

        if (this.root.AcWingOS) this.platform = 'ACAPP';

        this.username = '';
        this.photo = '';

        this.$settings = $(`
        <div class="ac-game-settings">
            <div class="ac-game-settings-login">
                <div class="ac-game-settings-title">
                LOG IN
                </div>
                <div class="ac-game-settings-username">
                    <div class="ac-game-settings-item">
                        <input type="text" placeholder="username">
                    </div>
                </div>
                <div class="ac-game-settings-password">
                    <div class="ac-game-settings-item">
                        <input type="password" placeholder="password">
                    </div>
                </div>
                <div class="ac-game-settings-submit">
                    <div class="ac-game-settings-item">
                        <button>login</button>
                    </div>
                </div>
                <div class="ac-game-settings-error-messages">
                </div>
                <div class="ac-game-settings-option">
                REGISTER
                </div>
                <br>
                <div class="ac-game-settings-acwing">
                    <img width="30" src="https://app5593.acapp.acwing.com.cn/static/image/settings/acwing_logo.png">
                    <br>
                    <div>One-click login</div>
                </div>
            </div>
            <div class="ac-game-settings-register">
                <div class="ac-game-settings-title">
                REGISTER
                </div>
                <div class="ac-game-settings-username">
                    <div class="ac-game-settings-item">
                        <input type="text" placeholder="username">
                    </div>
                </div>
                <div class="ac-game-settings-password ac-game-settings-password-first">
                    <div class="ac-game-settings-item">
                        <input type="password" placeholder="password">
                    </div>
                </div>
                <div class="ac-game-settings-password ac-game-settings-password-second">
                    <div class="ac-game-settings-item">
                        <input type="password" placeholder="confirm password">
                    </div>
                </div>
                <div class="ac-game-settings-submit">
                    <div class="ac-game-settings-item">
                        <button>register</button>
                    </div>
                </div>
                <div class="ac-game-settings-error-messages">
                </div>
                <div class="ac-game-settings-option">
                LOGIN
                </div>
                <br>
                <div class="ac-game-settings-acwing">
                    <img width="30" src="https://app5593.acapp.acwing.com.cn/static/image/settings/acwing_logo.png">
                    <br>
                    <div>One-click login</div>
                </div>
            </div>
        </div>
        `)
        this.$login = this.$settings.find(".ac-game-settings-login");
        this.$login_username = this.$login.find(".ac-game-settings-username input");
        this.$login_password = this.$login.find(".ac-game-settings-password input");
        this.$login_submit = this.$login.find(".ac-game-settings-submit button");
        this.$login_error_messages = this.$login.find(".ac-game-settings-error-messages");
        this.$login_register = this.$login.find(".ac-game-settings-option");

        this.$login.hide();

        this.$register = this.$settings.find(".ac-game-settings-register");
        this.$register_username = this.$register.find(".ac-game-settings-username input");
        this.$register_password = this.$register.find(".ac-game-settings-password-first input");
        this.$register_password_confirm = this.$register.find(".ac-game-settings-password-second input");
        this.$register_submit = this.$register.find(".ac-game-settings-submit button");
        this.$register_error_messages = this.$register.find(".ac-game-settings-error-messages");
        this.$register_login = this.$register.find(".ac-game-settings-option");
        

        this.$register.hide();

        this.$acwing_login = this.$settings.find(".ac-game-settings-acwing img");

        this.root.$ac_game.append(this.$settings);

        this.start();
    }

    start() {
        if (this.platform === 'ACAPP') {
            this.getinfo_acapp();
        } else {
            if (this.root.access) {
                this.getinfo_web();
                this.refresh_jwt_token();
            } else {
                this.login();
            }
            this.add_listening_events();
        }
    }

    refresh_jwt_token() {
        setInterval(() => {
            $.ajax({
                url: 'https://app5593.acapp.acwing.com.cn/settings/token/refresh',
                type: 'post',
                data: {
                    refresh: this.root.refresh,
                },
                success: resp => {
                    this.root.access = resp.access;
                }
            })
        }, 4.5 * 60 * 1000)

        setTimeout(() => {
            $.ajax({
                url: 'https://app5593.acapp.acwing.com.cn/settings/ranklist/',
                type: 'get',
                headers: {
                    'Authorization': 'Bearer ' + this.root.access,
                },
                success: resp => {
                    console.log(resp);
                }
            })
        }, 5000)
    }

    add_listening_events() {
        let outer = this;

        this.add_listening_events_login();
        this.add_listening_events_register();

        this.$acwing_login.click(function () {
            outer.acwing_login();
        })
    }

    add_listening_events_login() {
        let outer = this;
        this.$login_register.click(function () {
            outer.register();
        });

        this.$login_submit.click(function () {
            outer.login_on_remote();
        })
    }

    add_listening_events_register() {
        let outer = this;
        this.$register_login.click(function () {
            outer.login();
        })

        this.$register_submit.click(function () {
            outer.register_on_remote();
        })
    }

    acwing_login() {
        $.ajax({
            url: 'https://app5593.acapp.acwing.com.cn/settings/acwing/web/apply_code/',
            type: 'GET',
            success: function (resp) {

                if (resp.result === 'success') {
                    window.location.replace(resp.apply_code_url);
                }
            }
        })
    }

    login_on_remote(username, password) {     // log on remote server
        username = username || this.$login_username.val();
        password = password || this.$login_password.val();
        this.$login_error_messages.empty();
        
        $.ajax({
            url: 'https://app5593.acapp.acwing.com.cn/settings/token/',
            type: 'post',
            data: {
                username: username,
                password: password,
            },
            success: resp => {
                this.root.access = resp.access;
                this.root.refresh = resp.refresh; 
                this.getinfo_web();
                this.refresh_jwt_token();
            },
            error: () => {
                this.$login_error_messages.html('username or password error');
            }
        })
    }

    register_on_remote() {     // register on remote server
        let username = this.$register_username.val();
        let password = this.$register_password.val();
        let password_confirm = this.$register_password_confirm.val();
        this.$register_error_messages.empty();

        $.ajax({
            url: 'https://app5593.acapp.acwing.com.cn/settings/register/',
            type: 'GET',
            data: {
                username: username,
                password: password,
                password_confirm: password_confirm
            },
            success: resp => {
                if (resp.result === 'success') {
                    this.login_on_remote(username, password)
                } else {
                    this.$register_error_messages.html(resp.result);
                }
            }
        })
    }

    logout_on_remote() {     // log out remote server
        if (this.platform === 'ACAPP') {
            this.root.AcWingOS.api.window.close();
        } else {
            this.root.access = '';
            this.root.refresh = '';
            location.href = '/';
        }
    }

    login() {   // open log-in-interface
        this.$register.hide();
        this.$login.show();
    }

    register() {
        this.$login.hide();
        this.$register.show();
    }

    acapp_login(appid, redirect_uri, scope, state) {
        let outer = this;
        this.root.AcWingOS.api.oauth2.authorize(appid, redirect_uri, scope, state, function (resp) {
            if (resp.result === 'success') {
                outer.username = resp.username;
                outer.photo = resp.photo;
                outer.hide();
                outer.root.menu.show();
                outer.root.refresh = resp.refresh;
                outer.root.access = resp.access;
                this.refresh_jwt_token();
            } 
        });
    }

    getinfo_acapp() {
        let outer = this;

        $.ajax({
            url: 'https://app5593.acapp.acwing.com.cn/settings/acwing/acapp/apply_code/',
            type: 'GET',
            success: function (resp) {
                if (resp.result === 'success') {
                    outer.acapp_login(resp.appid, resp.redirect_uri, resp.scope, resp.state);
                }
            }
        })
    }

    getinfo_web() {
        $.ajax({
            url: 'https://app5593.acapp.acwing.com.cn/settings/getinfo/',
            type: 'GET',
            data: {
                platform: this.platform,
            },
            headers: {
                'Authorization': 'Bearer ' + this.root.access,
            },
            success: resp => {
                if (resp.result === 'success') {
                    this.username = resp.username;
                    this.photo = resp.photo;
                    this.hide();
                    this.root.menu.show();
                } else {
                    this.login();
                }
            }
        })
    }

    hide() {
        this.$settings.hide();
    }

    show() {
        this.$settings.show();
    }
}