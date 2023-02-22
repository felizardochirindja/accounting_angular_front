export const environment = {
  production: false,
  auth0: {
    config: {
      domain: 'dev-e40yqvv4.us.auth0.com',
      clientId: 'pWWG6oihGvTh0fQpVEDM3IZptjyVfVdw',
    },

    redirect: {
      login: 'http://localhost:4200/inicio',
      logout: 'http://localhost:4200',
    }
  },
};