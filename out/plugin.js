(() => {
  // src/util/burmod/require_all.ts
  function require_all() {
    ModAPI.require("player");
    ModAPI.require("network");
    ModAPI.require("settings");
  }

  // src/util/burmod/utils/clientName.ts
  var clientName = "burmod";

  // src/util/burmod/utils/chatLogger.ts
  function logToChat(msg) {
    ModAPI.displayToChat({ msg: `\xA75[${clientName}]\xA7r ${msg}` });
  }

  // src/util/burmod/utils/actualCommands.ts
  var actualCommands = {
    "help": {
      function: function(args) {
        logToChat("Monkey " + args[1]);
      },
      description: "Tells u what u r"
    }
  };

  // src/util/burmod/utils/commandHandler.ts
  function handle(msg) {
    if (msg.startsWith("e!")) {
      var args = msg.split(" ");
      args[0].slice(1);
      if (args[0] in actualCommands) {
        actualCommands[0].function(args);
      } else {
        logToChat("Command not found " + args[0]);
      }
    }
  }

  // src/Main.ts
  require_all();
  ModAPI.displayToChat({ msg: "hello, this is eaglerforge!" });
  ModAPI.logger.loginfo({ string: "you can log a string to console" });
  ModAPI.uwuify({ string: "and even uwuify a string?" });
  handle();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvYnVybW9kL3JlcXVpcmVfYWxsLnRzIiwgIi4uL3NyYy91dGlsL2J1cm1vZC91dGlscy9jbGllbnROYW1lLnRzIiwgIi4uL3NyYy91dGlsL2J1cm1vZC91dGlscy9jaGF0TG9nZ2VyLnRzIiwgIi4uL3NyYy91dGlsL2J1cm1vZC91dGlscy9hY3R1YWxDb21tYW5kcy50cyIsICIuLi9zcmMvdXRpbC9idXJtb2QvdXRpbHMvY29tbWFuZEhhbmRsZXIudHMiLCAiLi4vc3JjL01haW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBmdW5jdGlvbiByZXF1aXJlX2FsbCgpe1xuICBNb2RBUEkucmVxdWlyZShcInBsYXllclwiKTtcbiAgTW9kQVBJLnJlcXVpcmUoXCJuZXR3b3JrXCIpO1xuICBNb2RBUEkucmVxdWlyZShcInNldHRpbmdzXCIpO1xufVxuIiwgIi8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGhlIGNsaWVudCdzIG5hbWVcblxuZXhwb3J0IHZhciBjbGllbnROYW1lID0gXCJidXJtb2RcIjsiLCAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9DaGF0KG1zZykge1xuICAvL0B0cy1pZ25vcmVcbiAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogYFx1MDBBNzVbJHtjbGllbnROYW1lfV1cdTAwQTdyICR7bXNnfWB9KTtcbn0iLCAiaW1wb3J0IHsgbG9nVG9DaGF0IH0gZnJvbSBcIi4vY2hhdExvZ2dlclwiO1xuZXhwb3J0IHZhciBhY3R1YWxDb21tYW5kcyA9IHtcbiAgXCJoZWxwXCI6IHtcbiAgICBmdW5jdGlvbjogZnVuY3Rpb24oYXJncykge1xuICAgICAgbG9nVG9DaGF0KFwiTW9ua2V5IFwiK2FyZ3NbMV0pO1xuICAgIH0sXG4gICAgZGVzY3JpcHRpb246IFwiVGVsbHMgdSB3aGF0IHUgclwiXG4gIH1cbn0iLCAiaW1wb3J0IHsgbG9nVG9DaGF0IH0gZnJvbSBcIi4vY2hhdExvZ2dlclwiO1xuaW1wb3J0IHsgYWN0dWFsQ29tbWFuZHMgfSBmcm9tIFwiLi9hY3R1YWxDb21tYW5kc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZShtc2c6IHN0cmluZykge1xuICBpZiAobXNnLnN0YXJ0c1dpdGgoXCJlIVwiKSkge1xuICAgIHZhciBhcmdzID0gbXNnLnNwbGl0KFwiIFwiKTtcbiAgICBhcmdzWzBdLnNsaWNlKDEpO1xuXG4gICAgaWYgKGFyZ3NbMF0gaW4gYWN0dWFsQ29tbWFuZHMpIHtcbiAgICAgIGFjdHVhbENvbW1hbmRzWzBdLmZ1bmN0aW9uKGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dUb0NoYXQoXCJDb21tYW5kIG5vdCBmb3VuZCBcIiArIGFyZ3NbMF0pO1xuICAgIH1cbiAgfVxuXG59XG5cbiIsICJpbXBvcnQgeyByZXF1aXJlX2FsbCB9IGZyb20gXCIuL3V0aWwvYnVybW9kL3JlcXVpcmVfYWxsXCJcbmltcG9ydCB7IGhhbmRsZSB9IGZyb20gXCIuL3V0aWwvYnVybW9kL3V0aWxzL2NvbW1hbmRIYW5kbGVyXCJcblxuXG5yZXF1aXJlX2FsbCgpXG5Nb2RBUEkuZGlzcGxheVRvQ2hhdCh7bXNnOiBcImhlbGxvLCB0aGlzIGlzIGVhZ2xlcmZvcmdlIVwifSlcbk1vZEFQSS5sb2dnZXIubG9naW5mbyh7c3RyaW5nOiBcInlvdSBjYW4gbG9nIGEgc3RyaW5nIHRvIGNvbnNvbGVcIn0pXG5Nb2RBUEkudXd1aWZ5KHtzdHJpbmc6IFwiYW5kIGV2ZW4gdXd1aWZ5IGEgc3RyaW5nP1wifSlcbmhhbmRsZSgpXG4iXSwKICAibWFwcGluZ3MiOiAiOztBQUFPLFdBQVMsY0FBYTtBQUMzQixXQUFPLFFBQVEsUUFBUTtBQUN2QixXQUFPLFFBQVEsU0FBUztBQUN4QixXQUFPLFFBQVEsVUFBVTtBQUFBLEVBQzNCOzs7QUNGTyxNQUFJLGFBQWE7OztBQ0FqQixXQUFTLFVBQVUsS0FBSztBQUU3QixXQUFPLGNBQWMsRUFBQyxLQUFLLFNBQU0sVUFBVSxVQUFPLEdBQUcsR0FBRSxDQUFDO0FBQUEsRUFDMUQ7OztBQ0pPLE1BQUksaUJBQWlCO0FBQUEsSUFDMUIsUUFBUTtBQUFBLE1BQ04sVUFBVSxTQUFTLE1BQU07QUFDdkIsa0JBQVUsWUFBVSxLQUFLLENBQUMsQ0FBQztBQUFBLE1BQzdCO0FBQUEsTUFDQSxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7OztBQ05PLFdBQVMsT0FBTyxLQUFhO0FBQ2xDLFFBQUksSUFBSSxXQUFXLElBQUksR0FBRztBQUN4QixVQUFJLE9BQU8sSUFBSSxNQUFNLEdBQUc7QUFDeEIsV0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDO0FBRWYsVUFBSSxLQUFLLENBQUMsS0FBSyxnQkFBZ0I7QUFDN0IsdUJBQWUsQ0FBQyxFQUFFLFNBQVMsSUFBSTtBQUFBLE1BQ2pDLE9BQU87QUFDTCxrQkFBVSx1QkFBdUIsS0FBSyxDQUFDLENBQUM7QUFBQSxNQUMxQztBQUFBLElBQ0Y7QUFBQSxFQUVGOzs7QUNWQSxjQUFZO0FBQ1osU0FBTyxjQUFjLEVBQUMsS0FBSyw4QkFBNkIsQ0FBQztBQUN6RCxTQUFPLE9BQU8sUUFBUSxFQUFDLFFBQVEsa0NBQWlDLENBQUM7QUFDakUsU0FBTyxPQUFPLEVBQUMsUUFBUSw0QkFBMkIsQ0FBQztBQUNuRCxTQUFPOyIsCiAgIm5hbWVzIjogW10KfQo=
