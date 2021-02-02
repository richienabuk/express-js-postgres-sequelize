import AuthController from '../controllers/AuthController'

export default (app) => {
  app.post('/register', AuthController.signUp);

// Create a catch-all route for testing the installation.
app.all('*', (req, res) => res.status(200).send({
  message: 'Hello World!',
}));
};
