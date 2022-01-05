load("@aspect_rules_swc//swc:swc.bzl", "swc")

package(default_visibility = ["//visibility:public"])

swc(
    name = "local_pkg",
    srcs = glob(["*.ts"]),
    swcrc = "//packages/local_pkg:.swcrc",
    data = [
      "@local_pkg_npm//@types/node"
    ],
)
