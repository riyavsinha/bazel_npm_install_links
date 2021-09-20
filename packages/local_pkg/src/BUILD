load("@local_pkg_npm//@bazel/typescript:index.bzl", "ts_project")

package(default_visibility = ["//visibility:public"])

ts_project(
    name = "local_pkg",
    srcs = glob(["*.ts"]),
    incremental = True,
    source_map = True,
    declaration = True,
    declaration_map = True,
    tsconfig = "//packages/local_pkg:tsconfig",
    deps = [
      "@local_pkg_npm//@types/node"
    ],
)
