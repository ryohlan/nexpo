workflow "New workflow" {
  on = "push"
  resolves = ["Type Check"]
}

action "install tsc" {
  uses = "actions/npm@master"
  args = "install tsc"
}

action "Type Check" {
  uses = "actions/npm@master"
  args = "run tsc"
  needs = ["install tsc"]
}
