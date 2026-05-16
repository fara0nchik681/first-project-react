import Header from "../Header"
import { useState } from "react"

function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false) // Состояние видимости
  const [error, setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    setError("")

    if (!email.includes("@")) {
      setError("Введите корректный email")
      return
    }
    if (password.length < 6) {
      setError("Пароль должен быть не менее 6 символов")
      return
    }

    console.log("Форма отправлена")
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header />
      
      <div className="flex flex-col items-center justify-center mt-20 px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-8">Авторизация</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

           
            <div>
              <label className="block text-sm font-medium mb-1">Пароль</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Переключаем тип
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button" // Важно: type="button", чтобы не отправлялась форма
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-blue-600 font-medium transition-colors"
                >
                  {showPassword ? "Скрыть" : "Показать"}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-black font-semibold py-3 rounded-lg transition-all active:scale-[0.98]"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth