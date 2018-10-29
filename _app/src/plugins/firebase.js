import VueFire from 'vuefire'
import firebase from 'firebase'
const settings = {timestampsInSnapshots: true}
console.log('Loading Firebase')
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA421a6haqAA3dSQU1TUCPUTFCIPwmWiWE',
  authDomain: 'barnstorm-online.firebaseapp.com',
  databaseURL: 'https://barnstorm-online.firebaseio.com',
  projectId: 'barnstorm-online',
  storageBucket: '',
  messagingSenderId: '244330504376'
}
firebase.initializeApp(config)

const db = firebase.firestore()
db.settings(settings)

export default ({ Vue }) => {
  Vue.use(VueFire)
  Vue.prototype.$db = db
}
