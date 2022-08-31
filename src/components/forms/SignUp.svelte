<script>
  import { createForm } from "svelte-forms-lib";
  import * as yup from "yup";
  import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
  import { db } from "../../firebase";

  const pushLead = async (values) => {
      try {
        const docRef = await addDoc(collection(db,'leads'), {
          first: values.first,
          last: values.last,
          email: values.email,
          created: serverTimestamp(),
          updated: serverTimestamp(),
          converted: false,
          from: "signup"
        })
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }
  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      first: "",
      last: "",
      email: ""
    },
    validationSchema: yup.object().shape({
      first: yup.string().required(),
      last: yup.string().required(),
      email: yup
        .string()
        .email()
        .required()
    }),
    onSubmit: values => {
      pushLead(values)
      alert(JSON.stringify(values));
      // try {
      //   const docRef = await addDoc(collection(db,'leads'), values)
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    }
  });

  const style = {
    form: `flex flex-col py-6 gap-6`,
    label: ``,
    input: `rounded-xl border-b focus:border-b focus:outline-none focus:border-daoblue placeholder-daoblue px-10 py-2 text-daoblue`,
    button: `bg-daoblue py-3 px-4 rounded-xl text-white font-semibold text-center`,
  }
</script>

<form class={style.form} on:submit={handleSubmit}>
  
  <label for="first">name</label>
  <input
    id="first"
    name="first"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.first}
  />
  {#if $errors.first}
    <small>{$errors.first}</small>
  {/if}

  <label for="last">last</label>
  <input
    id="last"
    name="last"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.last}
  />
  {#if $errors.last}
    <small>{$errors.last}</small>
  {/if}
  <label for="email">email</label>
  <input
    id="email"
    name="email"
    class={style.input}
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.email}
  />
  {#if $errors.email}
    <small>{$errors.email}</small>
  {/if}

  <button class={style.button} type="submit">submit</button>
</form>