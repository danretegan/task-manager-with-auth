<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route
      path="/register"
      element={
        <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
      }
    />
    <Route
      path="/login"
      element={
        <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
      }
    />
    <Route
      path="/contacts"
      element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
    />
  </Route>
</Routes>;
