function Login() {
  return (
    <form>
      <h3 className="text-center text-xl mb-4">
        LOGIN
      </h3>
      <div className="flex flex-col gap-y-2 mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          className="input input-sm input-bordered input-primary w-full"
        />
      </div>
      <div className="flex flex-col gap-y-2 mb-4">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          className="input input-sm input-bordered input-primary w-full"
        />
      </div>
      <button className="btn btn-sm btn-primary">
        Login
      </button>
    </form>
  );
}

export default Login;