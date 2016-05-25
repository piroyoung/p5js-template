import pickle, json
from bottle import run, static_file, get, HTTPResponse
from jinja2 import Environment, FileSystemLoader

JINJA_ENV = Environment(loader=FileSystemLoader('./template/', encoding='utf8'))
TEMPLATE_TOP = JINJA_ENV.get_template('index.html')


@get('/static/<path:path>')
def callback(path):
    return static_file(path, root='./static')


@get('/')
def callback():
    return TEMPLATE_TOP.render({
        'title': 'hello!! p5.js',
        'description': 'My first p5.js sketch book.',
        'book': 'sketch.js',
    })


@get('/graph')
def callback():
    return TEMPLATE_TOP.render({
        'title': 'Graph rendering sample',
        'description': 'Preparation for Visualizing Neural Network',
        'book': 'graph.js',
    })


@get('/sound')
def callback():
    return TEMPLATE_TOP.render({
        'title': 'Play Sound Sample',
        'description': 'Sample code for midiToFreq',
        'book': 'sound.js',
    })


@get('/dat')
def callback():
    layers = json.dumps({'layers': pickle.load(open('nn.dump', 'rb'))})
    response = HTTPResponse(status=200, body=layers)
    response.set_header('Content-Type', 'application/json')
    return response


if __name__ == '__main__':
    run()
