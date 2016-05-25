from bottle import run, static_file, get
from jinja2 import Environment, FileSystemLoader

JINJA_ENV = Environment(loader=FileSystemLoader('./template/', encoding='utf8'))
TEMPLATE_TOP = JINJA_ENV.get_template('index.html')


@get('/static/<path:path>')
def callback1(path):
    return static_file(path, root='./static')


@get('/')
def callback2():
    return TEMPLATE_TOP.render({
        'title': 'hello!! p5.js',
        'description': 'My first p5.js sketch book.',
        'book': 'sketch.js',
    })


@get('/graph')
def callback2():
    return TEMPLATE_TOP.render({
        'title': 'Graph rendering sample',
        'description': 'Preparation for Visualizing Neural Network',
        'book': 'graph.js',
    })


if __name__ == '__main__':
    run()
