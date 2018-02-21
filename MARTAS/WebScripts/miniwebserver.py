#von http://twistedmatrix.com/documents/current/web/howto/web-in-60/static-content.html
#und von Roman

from twisted.web.server import Site
from twisted.web.static import File
#from twisted.internet import reactor, endpoints
from twisted.internet import reactor

resource = File('.')
factory = Site(resource)
#endpoint = endpoints.TCP4ServerEndpoint(reactor, 8888)
#endpoint.listen(factory)
reactor.listenTCP(8080,factory)
reactor.run()

