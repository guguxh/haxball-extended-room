"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
/** Class representing a command. */
class Command {
    /**
     * Creates a command object.
     *
     * @param options Command configurations.
     */
    constructor(options) {
        var _a, _b, _c, _d, _e;
        /**
         * The command's aliases.
         */
        this.aliases = [];
        /**
         * The permission roles.
         *
         * If a player doesn't have all the specified roles, they will be blocked from running the command.
         */
        this.roles = [];
        /**
         * Whether to delete the player's message.
         */
        this.deleteMessage = true;
        this.name = options.name;
        this.aliases = (_a = options.aliases) !== null && _a !== void 0 ? _a : this.aliases;
        this.desc = (_b = options.desc) !== null && _b !== void 0 ? _b : "";
        this.usage = (_c = options.usage) !== null && _c !== void 0 ? _c : "";
        this.roles = (_d = options.roles) !== null && _d !== void 0 ? _d : this.roles;
        this.deleteMessage = (_e = options.deleteMessage) !== null && _e !== void 0 ? _e : this.deleteMessage;
        this.func = options.func;
    }
    /**
     * Whether the player is allowed to run this command based on their roles.
     *
     * @param player The player.
     */
    isAllowed(player) {
        return this.roles.every(role => player.hasRole(role));
    }
    /**
     * Runs the command.
     *
     * @param info The command's execution information.
     */
    run(info) {
        try {
            this.func(info);
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.Command = Command;
//# sourceMappingURL=Command.js.map