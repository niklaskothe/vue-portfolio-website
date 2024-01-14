<script setup>
    import { ref } from 'vue'

    const name = ref('')
    const email = ref('')
    const message = ref('')
    const privacyAgreement = ref(false)

    function submitForm() {
        if (privacyAgreement.value) {
        // TODO: Logik um Formular abzuschicken ?!
        console.log('Formular abgeschickt:', { name: name.value, email: email.value, message: message.value })
 
        name.value = ''
        email.value = ''
        message.value = ''
        privacyAgreement.value = false
    } else {
        alert('Bitte bestätigen Sie die Datenschutzerklärung.')
  }
}
</script>


<template>
    <div class="contact-form">
      <!--<h2>Kontaktformular</h2>-->
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <input placeholder="Name" type="text" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <input placeholder="E-Mail" type="email" id="email" v-model="email" required>
        </div>
        <div class="nachricht">
          <textarea placeholder="Nachricht" id="message" v-model="message" rows="5" required></textarea>
        </div>
        <div class="datenschutz">
          <label>
            <input type="checkbox" v-model="privacyAgreement" required>
            Ich bestätige die Datenschutzerklärung.
          </label>
        </div>
        <button type="submit" :disabled="!privacyAgreement">Absenden</button>
      </form>
    </div>
</template>


<style>
.contact-form {
  margin-top: 40px;
}

form {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 8px;
  padding-right: 8px;
  margin-bottom: 20px;
}

input.name, input.email, input  {
  margin-bottom: 16px;
}

.nachricht, .datenschutz {
  grid-column: span 2;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}
@media (max-width: 600px) {
  form {
      display: block; 
  }
  .datenschutz {
    font-size: 12px;
  }
}
button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: var( --color-highlight);
  /*color: var(--color-heading);*/
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>