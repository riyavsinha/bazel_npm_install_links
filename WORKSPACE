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

#####################
# rules_swc
#####################

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "aspect_rules_swc",
    sha256 = "b58c8f3681215af30842bc3eeec30c9d2047cdf63302bba7d2e86c55a5c77edf",
    strip_prefix = "rules_swc-0.3.1",
    url = "https://github.com/aspect-build/rules_swc/archive/v0.3.1.tar.gz",
)

# Fetches the rules_swc dependencies.
# If you want to have a different version of some dependency,
# you should fetch it *before* calling this.
# Alternatively, you can skip calling this function, so long as you've
# already fetched all the dependencies.
load("@aspect_rules_swc//swc:dependencies.bzl", "rules_swc_dependencies")
rules_swc_dependencies()

# Fetches a pre-built Rust-node binding from
# https://github.com/swc-project/swc/releases.
# If you'd rather compile it from source, you can use rules_rust, fetch the project,
# then register the toolchain yourself. (Note, this is not yet documented)
load("@aspect_rules_swc//swc:repositories.bzl", "swc_register_toolchains")
swc_register_toolchains(
    name = "swc",
    swc_version = "v1.2.118",
)

# Fetches a NodeJS interpreter, needed to run the swc CLI.
# You can skip this if you already register a nodejs toolchain.
load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")
nodejs_register_toolchains(
    name = "node16",
    node_version = "16.9.0",
)