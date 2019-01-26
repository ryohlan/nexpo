workflow "New workflow" {
  on = "push"
  resolves = ["Type Check"]
}

action "install tsc" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  runs = "npm i tsc"
}

action "Type Check" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  runs = "npm run tsc"
  needs = ["install tsc"]
}
