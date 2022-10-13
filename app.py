from crypt import methods
from flask import Flask, render_template


app = Flask(__name__)

@app.route('/',methods=['GET'])
def index():
    return render_template('ToDosList.html')


@app.route('/contact',methods=['GET'])
def kaushal():
    return render_template('contact.html')



if __name__ == '__main__':
    app.run(debug = True, port = 8000)