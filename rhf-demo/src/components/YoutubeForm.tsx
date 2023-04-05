import { useForm } from "react-hook-form"

const YoutubeForm = () => {

  const form = useForm()
  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />

        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' />

        <button>Submit</button>
      </form>
    </div>
  )
}


//React-hook-form package
// Manage form data
//Submit form data
//Enforce validations and provide visual feedback

//👁️👁️ Managing Form state
// -->> Every form has a few moving parts that keep changing from the time a user loads the form to the time they submit it.
//--------->>℗ current value of every field in the form 
//--------->>℗ whether a field has been interacted with
//--------->>℗ whether a field's value has changed
//--------->>℗ whether the form is invalid
//--------->>℗ whether a field contains errors

export default YoutubeForm
