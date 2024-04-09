export default function CreateAccount() {
  return (
    <div>
      <div>
        <label htmlFor="username">Användarnamn/Epost</label>
        <input type="text" />
        <label htmlFor="password">Lösenord</label>
        <input type="text" />
        <button type="submit">Skapa konto</button>
      </div>
    </div>  )
}