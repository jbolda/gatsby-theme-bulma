#!/bin/sh
yarn bootstrap

cd "$1" || exit

NODE_ENV=production ./node_modules/.bin/gatsby build
