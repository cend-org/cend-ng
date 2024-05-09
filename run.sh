#!/bin/bash
echo "Updating code from Git..."
cd /usr/workspace/cend-ng && sudo git fetch origin && sudo git reset --hard origin/main

echo "running..."
sudo npm run serve:ssr:angular-app
