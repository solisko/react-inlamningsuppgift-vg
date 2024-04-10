// import { useState } from "react";

// export default function CreateAccount() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleCreate = async (username, password) => {
//     try {
//       const response = await fetch("http://localhost:3000/accounts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       if (!response.ok) {
//         const errorMessage = await response.text();
//         throw new Error(`Failed to create user: ${errorMessage}`);
//       }
//       console.log("Auction created successfully!");
//       setUsername("");
//       setPassword("");

//       const data = await response.json();
//       console.log('User created successfully:', data);
//     } catch (error) {
//       console.error('Error creating user:', error.message);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="username">Användarnamn/Epost</label>
//         <input
//           type="text"
//           placeholder="Användarnamn"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <label htmlFor="password">Lösenord</label>
//         <input
//           type="text"
//           placeholder="Lösenord"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="button" onClick={handleCreate}>
//           Skapa konto
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreate = async () => {
    try {
      const response = await fetch("http://localhost:3000/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to create user: ${errorMessage}`);
      }
      console.log("User created successfully!");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("There was an error creating the account:", error.message);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="username">Användarnamn/Epost</label>
        <input
          type="text"
          placeholder="Användarnamn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Lösenord</label>
        <input
          type="text"
          placeholder="Lösenord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleCreate}>
          Skapa konto
        </button>
      </div>
    </div>
  );
}
