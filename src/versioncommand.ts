import { require_all } from "./util/burmod/require_all"
import { logToChat } from "./util/burmod/utils/chatLogger"
import { logToConsole } from "./util/burmod/utils/consoleLogger"
import { handle } from "./util/burmod/utils/commandHandler"
require_all()
handle(msg:"version")

export function versionCommand(){
    
}