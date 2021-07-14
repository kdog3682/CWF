#!/usr/bash

set -e

vueJS='https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js'
codemirrorJS='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.4/codemirror.min.js'
codemirrorCSS='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.59.4/codemirror.css'
kdog3682_website='kdog3682.github.io'
email='kdog3682@gmail.com'
ssh_dir='~/.ssh/id_rsa'
user='kdog3682'
repo='cwf'
vimrc='.vimrc'
bash_aliases='.bash_aliases'
profile='.profile'
drive_env='/mnt/chromeos/GoogleDrive/MyDrive/env.py'
cwf_env='~/CWF/env.py'
mycwf='https://github.com/kdog3682/cwf'
email='kdog3682@gmail.com'
username='kdog3682'
pythonlibraries='praw requests fpdf regex PyGithub'
publickey='.ssh/id_rsa.pub'
repo='cwf'
url='https://raw.githubusercontent.com/kdog3682/cwf/master'

setup() {
    ############################################# Perform Initial Installations 
    sudo apt-get update
    sudo apt-get dist-upgrade
    sudo apt-get xclip

    ############################################## Install Python
    sudo apt-get install python3 python3-pip
    pip3 install $pythonlibraries

    ############################################## Install Node
    sudo apt-get install curl gnupg -y
    curl -sl https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt-get install -y nodejs
    mkdir ~/.npm-global
    npm config set prefix '~/.npm-global'
    # npm install -g prettier
    # npm install -g @vue/cli

    ############################################### Load config files
    curl -O $url/$vimrc
    curl -O $url/$bash_aliases
    curl -O $url/$profile
    git config --global user.name "$username"
    git config --global user.email "$email"
    # git clone $mycwf

    # {echo '\n'; echo '\n';} | ssh-keygen -t rsa -b 4096 -C "$email"
    # cat $publickey | xclip
    # xdg-open https://github.com/settings/keys
    # xdg-open https://github.com/settings/tokens
    # xdg-open https://github.com/kdog3682/cwf

    ############################################# Finish Actions
    echo 'finished'
    ls
    sleep 3
    echo 'refreshing in 3 seconds'
    reset
}
