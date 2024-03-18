import { require_all } from "./util/burmod/require_all"
require_all()
import { handle } from "./util/burmod/utils/commandHandler"

ModAPI.displayToChat({msg: "hello, this is eaglerforge!"})
ModAPI.logger.loginfo({string: "you can log a string to console"})
ModAPI.uwuify({string: "and even uwuify a string?"})

