load("@pkg_a_npm//ava:index.bzl", "ava_test")
load("@aspect_rules_swc//swc:swc.bzl", "swc")

swc(
  name = "tests_js",
  swcrc = "//packages/pkg_a/server:.swcrc"
)

ava_test(
  name = "tests",
  args = ["-v **/*-test.js"],
  data = [
    ":tests_js",
    "@pkg_a_npm//@example-org/local-pkg"
  ],
)