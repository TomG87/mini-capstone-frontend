import  {LogoutLink } from "./LogoutLink"

export function Header() {
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // show login/signup
    authenticationLinks = <>
      <a href="/login">Login</a>| <a href="/signup">Signup</a>
    </>
  } else {
    // show logout
    authenticationLinks = <LogoutLink />
  }

  
  return (
    <header>
      <nav>
        <a href="/">Home</a> | 
        <a href="/products/new">New Product</a> | 
        {authenticationLinks} | 
      </nav>
    </header>
  )
}