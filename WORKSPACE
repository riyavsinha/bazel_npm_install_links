# Bazel workspace created by @bazel/create 4.0.0

# Declares that this directory is the root of a Bazel workspace.
# See https://docs.bazel.build/versions/main/build-ref.html#workspace
workspace(
    # How this workspace would be referenced with absolute labels from another workspace
    name = "example",
    # Map the @npm bazel workspace to the node_modules directory.
    # This lets Bazel use the same node_modules as other local tooling.
    managed_directories = {
      "@local_pkg_npm": ["packages/local_pkg/node_modules"],
      "@pkg_a_npm": ["packages/pkg_a/node_modules"]
    },
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "8a7c981217239085f78acc9898a1f7ba99af887c1996ceb3b4504655383a2c3c",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/4.0.0/rules_nodejs-4.0.0.tar.gz"],
)

# The npm_install rule runs yarn anytime the package.json or package-lock.json file changes.
# It also extracts any Bazel rules distributed in an npm package.
load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")

# Name will allow referencing like: @local_pkg_npm//package
npm_install(
    name = "local_pkg_npm",
    package_json = "//packages/local_pkg:package.json",
    package_lock_json = "//packages/local_pkg:package-lock.json",
    visibility = ["//:__subpackages__"]
)

npm_install(
    name = "pkg_a_npm",
    package_json = "//packages/pkg_a:package.json",
    package_lock_json = "//packages/pkg_a:package-lock.json",
    visibility = ["//visibility:public"],
    links = {
      "@example-org/local-pkg": "//packages/local_pkg/src:local_pkg"
    }
)

