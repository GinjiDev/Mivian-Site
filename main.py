import random

from flask import Flask, render_template, request, jsonify, Response
from functools import wraps

#web-server

app = Flask(__name__)
app.secret_key = ''

api_passwords = {
    'root': ''
}

def check_auth(username, password):
    return username in api_passwords and api_passwords[username] == password

def unauthorized():
    return Response('Unauthorized', 401, {'WWW-Authenticate': 'Basic realm="Login Required"'})

def require_auth(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return unauthorized()
        return func(*args, **kwargs)
    return wrapper

sentences = [
    "Сегодня отличный день для новых открытий!",
    "Путешествие - это всегда увлекательно.",
    "Счастье - это когда ты делаешь то, что любишь.",
    "Успех - это результат постоянных усилий.",
    "Всегда старайся быть лучше, чем вчера!"
]

@app.route('/')
def index():
    random_sentence = random.choice(sentences)
    return render_template('index.html', sentence=random_sentence)

@app.route('/api/ping', methods=['GET'])
@require_auth
def protected_data():
    data = {
        'message': 'Pong!'
    }
    return jsonify(data)

@app.route('/process', methods=['POST'])
def process():
    print('.')
    return "Обработано"


app.run(host='0.0.0.0', port=80)