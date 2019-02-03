#!/bin/sh
yarn bootst

cd "$1" || exit

NODE_ENV=production ./node_modules/.bin/gatsby build
