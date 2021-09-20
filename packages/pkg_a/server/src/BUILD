

load("@pkg_a_npm//@bazel/typescript:index.bzl", "ts_project")

package(default_visibility = ["//visibility:public"])

ts_project(
    name = "server",
    srcs = glob(["*.ts"]),
    incremental = True,
    source_map = True,
    declaration = True,
    tsconfig = "//packages/pkg_a/server:tsconfig.json",
    deps = [
      "@pkg_a_npm//@example-org/local-pkg"
    ],
)
