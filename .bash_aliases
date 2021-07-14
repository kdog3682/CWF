
alias server='python3 -m http.server'
alias proj='cd ~/CWF/proj'
alias l='vim vuecm5.html vuehelpers.js'
alias r='vim reddit.txt'
stty stop ""
alias red='vim reddit.txt'

openf() {
    FILE=/mnt/chromeos/GoogleDrive/MyDrive/$1
    if [ -f "$FILE" ]; then
        echo "$FILE exists."
        xdg-open $FILE
    else
        echo "$FILE does not exist."
    fi
}

alias vue='vim vuecm2.html'
alias dl='cd /mnt/chromeos/MyFiles/Downloads'
alias q='vim questions.txt'


alias vimbashrc='vim ~/.bashrc && source $_'
dailybackup() {
    echo 'hiiii'
}
export -f dailybackup 

updatemyfiles() {
    python3 utils.py
}
export -f updatemyfiles 

sayhi() {
    echo 'hiiii'
}
export -f sayhi

#alias bash='vim ~/setup.sh'
alias cleandir.py='vim ~/CWF/cleandir.py'

cleandir() {
    python3 ~/CWF/cleandir.py
}
runpython() {
    #  python3 ~/CWF/askreddit.py
    python3 ~/CWF/cleandir.py
    #  python3 printdir.py
}

# ----------------------------
# Sunday, 01-24-2021, 11:35 AM
# ----------------------------
alias cwf='cd ~/CWF'
alias hi='echo hi'
alias a='vim ./paction.js'
alias an='vim allnotesjanuary.json'
alias b='vim ~/.bash_aliases'
alias c='p editcontroller.py'
alias constants='vim ./constants.js'
alias d='rm ./.vimrc.swp'
alias et='vim test.py'
alias g='cd /mnt/chromeos/GoogleDrive/MyDrive'
alias h='cd ~/'
alias h='vim ./helpers.py'
alias home='cd /mnt/chromeos/GoogleDrive/MyDrive'
alias i='vim /mnt/chromeos/GoogleDrive/MyDrive/index.html'
alias la='ls -a'
alias lc='vim ./constants.js'
alias li='vim ./index.html'
alias listen='sudo netstat -tulpn | grep LISTEN'
alias log='git log --oneline --decorate --graph --all'
alias lu='vim ./utils.js'
alias m='vim methods.js'
alias n='node'
alias nstat='sudo netstat -ap | grep :8000'
alias p='python3'
alias packagemodule='touch package.json > {"type": "module"}'
alias pip='pip3'
alias removemodule='rm package.json'
alias rmuswap='rm ./.utils.js.swp'
alias rmvswap='rm ./.vimrc.swp'
alias s='source ~/.bashrc'
alias stderr='vim /mnt/chromeos/GoogleDrive/MyDrive/stderr.log'
alias stdout='vim /mnt/chromeos/GoogleDrive/MyDrive/stdout.log'
alias sv='source .vimrc'
alias t='vim ./today.py'
alias uc='vim utils.jscopy'
alias uj='vim utils.js'
alias up='vim utils.py'
alias utils='vim ./utils.js'
alias v='vim ~/.vimrc'
alias vime='vim extra.js'
alias vimec='vim ec.py'
alias vimh='vim helpers.py'
alias vimp='vim Print.py'
alias vimu='vim utils.js'
alias z='vim /mnt/chromeos/GoogleDrive/MyDrive/z'

add() {
    git add $1
    git commit -m $1
}

bu() {
    echo Backing up to Google Drive $1
    cp $1 /mnt/chromeos/GoogleDrive/MyDrive/$1
}
copy() {
  cp $1 $1copy
}

bua() {
    bu methods.js
    bu utils.js
    bu utils.py
    bu vuecm2.html
}

bucwf() {
  echo backing up index1 and utiljs
  cp utils.js utils.jscopy
  cp index1.html index1.htmlcopy
  cp helpers.py helpers.pycopy
}

k() {
  vim ~/kdog3682/$1
}

mark() {
  mv $1 $1mark
}

pr() {
  python3 /mnt/chromeos/GoogleDrive/MyDrive/actions.py print $1 $2
}

rcwf() {
  reverting index1 and utiljs
  cp utils.jscopy utils.js
  cp index1.htmlcopy index1.html
}

rev() {
  cp utils.jscopy utils.js
}

sh() {
  cp $1 /mnt/chromeos/GoogleDrive/MyDrive/$1
}

toutils() {
  echo copying $1 to utils.js
  cp $1 utils.js
}

runjs() {
    node utils.js
}
export -f runjs



open() {
    python3 new.py 'open' $@
}

save() {
    python3 new.py 'save' $@
}

print() {
    python3 new.py 'print' $@
}

reddit() {
    python3 new.py 'reddit' $@
}

clean() {
    python3 new.py 'clean' $@
}

alias c='clear'


go() {
    $1 >> filetracker.txt
    vim $1
}


alias h='vim ./helpers.js'
alias th='vim ./thursday.html'
alias p='source .profile'
