export default function Login() {
  return (
    <div className="w-full h-dvh justify-center items-center flex flex-col">
      <fieldset className="fieldset bg-base-200 justify-evenly items-center flex flex-col border-base-300 h-1/2 shadow rounded-box w-xl border p-4">
        <input type="email" className="input w-full" placeholder="Email" />

        <input
          type="password"
          className="input w-full"
          placeholder="Password"
        />

        <button className="btn btn-neutral  w-full">Login</button>
      </fieldset>
    </div>
  );
}
