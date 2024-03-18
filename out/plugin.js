(() => {
  // src/util/burmod/require_all.ts
  function require_all() {
    ModAPI.require("player");
    ModAPI.require("network");
    ModAPI.require("settings");
  }

  // src/Main.ts
  require_all();
  ModAPI.displayToChat({ msg: "hello, this is eaglerforge!" });
  ModAPI.logger.loginfo({ string: "you can log a string to console" });
  ModAPI.uwuify({ string: "and even uwuify a string?" });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvYnVybW9kL3JlcXVpcmVfYWxsLnRzIiwgIi4uL3NyYy9NYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQgZnVuY3Rpb24gcmVxdWlyZV9hbGwoKXtcbiAgTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gIE1vZEFQSS5yZXF1aXJlKFwibmV0d29ya1wiKTtcbiAgTW9kQVBJLnJlcXVpcmUoXCJzZXR0aW5nc1wiKTtcbn1cbiIsICJpbXBvcnQgeyByZXF1aXJlX2FsbCB9IGZyb20gXCIuL3V0aWwvYnVybW9kL3JlcXVpcmVfYWxsXCJcbnJlcXVpcmVfYWxsKClcbmltcG9ydCB7IGhhbmRsZSB9IGZyb20gXCIuL3V0aWwvYnVybW9kL3V0aWxzL2NvbW1hbmRIYW5kbGVyXCJcblxuTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogXCJoZWxsbywgdGhpcyBpcyBlYWdsZXJmb3JnZSFcIn0pXG5Nb2RBUEkubG9nZ2VyLmxvZ2luZm8oe3N0cmluZzogXCJ5b3UgY2FuIGxvZyBhIHN0cmluZyB0byBjb25zb2xlXCJ9KVxuTW9kQVBJLnV3dWlmeSh7c3RyaW5nOiBcImFuZCBldmVuIHV3dWlmeSBhIHN0cmluZz9cIn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7O0FBQU8sV0FBUyxjQUFhO0FBQzNCLFdBQU8sUUFBUSxRQUFRO0FBQ3ZCLFdBQU8sUUFBUSxTQUFTO0FBQ3hCLFdBQU8sUUFBUSxVQUFVO0FBQUEsRUFDM0I7OztBQ0hBLGNBQVk7QUFHWixTQUFPLGNBQWMsRUFBQyxLQUFLLDhCQUE2QixDQUFDO0FBQ3pELFNBQU8sT0FBTyxRQUFRLEVBQUMsUUFBUSxrQ0FBaUMsQ0FBQztBQUNqRSxTQUFPLE9BQU8sRUFBQyxRQUFRLDRCQUEyQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
