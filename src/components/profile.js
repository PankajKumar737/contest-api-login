import React from 'react'

const profile = () => {
  return (
    <div>

{/* useEffect(()=>{
              if(token != ""){
                    axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                      headers: {
                          "Authorization":  `Bearer ${token}`
                      }  
                    })
                      .then(response => setZuku(response.data.data.message))
                      .catch(err => console.log(err))
                  }
          }, [token]
          ) */}
      <ul>
        <li>{localStorage.getItem("user.email")}</li>
        <li>{localStorage.getItem("user.password")}</li>
      </ul>
      
    </div>
  )
}

export default profile;
