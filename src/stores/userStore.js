import { defineStore } from 'pinia'
import { auth, db,usersCollection } from '@/firebase'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: auth.currentUser,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        photoURL: auth.currentUser.photoURL,
        phoneNumber: auth.currentUser.phoneNumber,
        emailVerified: auth.currentUser.emailVerified,
        providerId: auth.currentUser.providerData[0].providerId,
        loading: true,
        error: null,
        data:{}
       
    }),
    getters: {
        currentUser: (state) => state.currentUser,

    },
    mutations: {

    },
    actions: {
        signOut(){
            auth.signOut();
            this.user = null;
            window.localStorage.removeItem('user');
            window.location.replace("/");

        },
        async updateUser(profile) {
                try {
                    const userRef = db.collection('users').doc(auth.currentUser.uid);
                     userRef.update(profile);
                   
                } catch (error) {
                    console.log(error);
                }
            },
            createUser(user) {
                return usersCollection.addDoc(user)
              },
            
            async getUser(id){
                const user = await usersCollection.doc(id).get()
                return user.exists ? user.data() : null
              },
              
            //   updateUser(id, user){
            //     return usersCollection.doc(id).update(user)
            //   },
              
              deleteUser(id){
                return usersCollection.doc(id).delete()
              }
             
    }
})