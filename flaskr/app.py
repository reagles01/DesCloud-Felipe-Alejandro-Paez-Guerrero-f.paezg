from flaskr import create_app
from flask_restful import Api
from .modelos import db, Usuario, Evento
from .vistas import VistaEventos, VistaSignIn, VistaLogIn, VistaEventosUsuario, VistaSignInDel, VistaEvento
from flask_cors import CORS
from flask_jwt_extended import JWTManager
#from flask import render_template

app = create_app('default')
app_context = app.app_context()
app_context.push()

db.init_app(app)
db.create_all()

cors = CORS(app)

#@app.route('/')
#def home():
    #return 'hellos, world!'
 #   return render_template('index.html')
    

api = Api(app)
api.add_resource(VistaSignIn, '/signin')
api.add_resource(VistaSignInDel, '/signin/<int:id_usuario>')
api.add_resource(VistaLogIn, '/login')
api.add_resource(VistaEventosUsuario, '/usuario/<int:id_usuario>')
#api.add_resource(VistaEventos, '/evento/<int:id_evento>')
api.add_resource(VistaEvento, '/eventos/')

jwt = JWTManager(app)