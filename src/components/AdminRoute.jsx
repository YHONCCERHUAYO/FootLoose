function AdminRoute({ children, ...rest }) {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user && auth.hasRole('admin') ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  function App() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <AdminRoute path="/admin">
              <AdminPanel />
            </AdminRoute>
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
  