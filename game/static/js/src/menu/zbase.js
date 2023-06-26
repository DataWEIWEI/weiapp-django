class AcGameMenu {
    constructor(root) {
        this.root = root;
        this.$menu = $(`
        <div class="ac-game-menu">
            <div class="ac-game-menu-field">
                <div class="ac-game-menu-field-item ac-game-menu-field-item-single-mode">
                    单人模式
                </div>
                <div class="ac-game-menu-field-item ac-game-menu-field-item-multi-mode">
                    多人模式
                </div>
                <div class="ac-game-menu-field-item ac-game-menu-field-settings">
                    设置
                </div>
            </div>
        </div>`);

        this.root.$ac_game.append(this.$menu);
        this.$single_mode = this.$menu.find('.ac-game-menu-field-item-single-mode');
        this.$multi_mode = this.$menu.find('.ac-game-menu-field-item-multi-mode');
        this.$settings = this.$menu.find('.ac-game-menu-field-item-settings');
        
        this.start();
    };

    start() {
        this.add_listening_events();
    }

    add_listening_events() {
        let outer = this;

        this.$single_mode.click(function () {
            console.log(1);
        });

        this.$multi_mode.click(function () {
            console.log(2);
        });

        this.$settings.click(function () {
            console.log(3);
        });
    }

    // 显示界面
    show() {
        this.$menu.show();
    }

    // 隐藏界面
    hide() {
        this.$menu.hide();
    }
}