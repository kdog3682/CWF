import os
import github
from storage import *
import env
import sys

def authenticateRepo(repo, token):
    command = (
        'curl -H "Authorization: token '
        + token
        + '" --data \'{"name":"'
        + repo
        + "\"}' https://api.github.com/user/repos"
    )
    os.system(command)

def getservice(repo, user, token):
    g = github.Github(token)
    query = user + "/" + repo
    print(query)
    try:
        return g.get_repo(query)
    except:
        print('Could not get the repo.')
        authenticateRepo(repo, token)
        import time
        time.sleep(60)
        print('sleeping for 60 seconds')
        return g.get_repo(query)

def writefile(service, file, content):
    try:
        servicer = service.get_contents(file, ref="master")
        return service.update_file(servicer.path, "--", content, servicer.sha, branch="master")
    except:
        try:
            return service.create_file(file, "--", content, branch="master")
        except:
            print('error')

def deletefile(service, file):
    servicer = service.get_contents(file, ref="master")
    service.delete_file(servicer.path, "delete", servicer.sha, branch="master")

def main(key = 'brooklyn', file = 'index.html', single=None, files = None):
    dict = {
        'studentcircles': ['studentcircles', 'kdog3682', env.githubtoken],
        'cwf':            ['CWF', 'kdog3682', env.githubtoken],
        'kdog3682':       ['kdog3682.github.io', 'kdog3682', env.githubtoken],
        'maylynn':        ['maylynnml.github.io', 'maylynnml', env.maylynntoken],
        'brooklyn': ['brooklynlearning.github.io', 'brooklynlearning', env.bklyntoken],
    }

    aliasmap = {
        'ml': 'maylynn',
        'kdog': 'kdog3682',
        'me': 'kdog3682',
        'self': 'kdog3682',
        'bklyn': 'brooklyn',
        'b': 'brooklyn',
        'bayridge': 'bayridgelearningcenter',
        'sc': 'studentcircles',
    }

    if len(sys.argv) >= 2:
        key = sys.argv[1]
    if len(sys.argv) >= 3:
        file = sys.argv[2]


    service = getservice(*dict.get(key, dict.get(aliasmap.get(key))))
    if single:
        for item in single.split(' '):
            print(writefile(service, item, read(item) + '\n\n' + logStatement(item)))
    elif files:
        for item in files:
            print(writefile(service, item, read(item) + '\n\n' + logStatement(item)))
    else:
        generateGithubUpload(service, file)


def check(*args):
    print('checking parameters')
    print(args)
    #input('Click done to finish')
    #raise Exception('Pausing')

def getFileDependencies(s):
    r = '<(?:script|link).*?(?:src|href)=[\'\"]?(.*?)[\'\"]? */?>'
    filtration = lambda x: not test('http|\.com', x)
    dependencies = filtered(re.findall(r, s), filtration)
    valid = every(dependencies, isfile)
    if valid:
        return dependencies
    else:
        print(dependencies)
        raise Exception('invalid file dependencies') 

def generateGithubUpload(service, file):
    print('generating github upload for file:', file)
    s = read(file)
    store = {'index.html': s}
    writefile(service, 'index.html', s)
    for file in getFileDependencies(s):
        result = writefile(service, file, read(file))
        print(result)

    print('DONE WITH GITHUB UPLOAD. SUCCESS!')

if __name__ == '__main__':
    #print(getFileDependencies(read('index.html')))
    #main(single='helpers.js index.html')
    #input('Click done to finish')
    main(key='cwf', files=['githubscript.py'])



