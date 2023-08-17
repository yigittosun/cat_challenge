
import Swal from 'sweetalert2';

export default defineNuxtPlugin((app) => {
  app.provide('swal', Swal);
});
