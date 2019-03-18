/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

FriendlyEats.prototype.addRestaurant = function(data) {
  /*
    TODO: Implement adding a document
  */
};

var MasterID;
FriendlyEats.prototype.getAllUsers = function(renderer) {

  var user = firebase.auth().currentUser;
var query = firebase.firestore()
.collection('Masters')
.where("email", "==", user.email);
// .orderBy('Email')
// .limit(50);



this.getMasterInQuery(query, renderer);



//   var query = firebase.firestore()
//   .collection('Users')
//   .orderBy('DeviceName')
//   .where("DeviceMaster", "==", MasterID)
//   .limit(50);

// this.getDocumentsInQuery(query, renderer);

};

function GetDocuments() {
  var query = firebase.firestore()
  .collection('Users')
  .orderBy('DeviceName')
  .where("DeviceMaster", "==", MasterID)
  .limit(50);

this.getDocumentsInQuery(query, renderer);
}



FriendlyEats.prototype.getDocumentsInQuery = function(query, renderer) {
  query.onSnapshot(function(snapshot) {
    if (!snapshot.size) return renderer.empty(); // Display "There are no users".
    
   
    snapshot.docChanges().forEach(function(change) {
     
      
      if (change.type === 'removed') {
        renderer.remove(change.doc);
      }
      //  else if (change.type === 'modified'){
      //   console.log(change.type);
      
      //   if (change.doc.data().Responding) {
       
      //     renderer.removeError(change.doc);
        
      //   }
      //   //  location.reload();

       
      // }
      else{
         renderer.display(change.doc);
         renderer.removeError(change.doc);
         document.getElementById('doc-' + change.doc.id).style.backgroundColor =  "lightgreen";
        
      
        if (!change.doc.data().Responding) {
       
           renderer.displayError(change.doc);
           document.getElementById('doc-' + change.doc.id).style.backgroundColor = "Grey";
          document.getElementById('doc-noResp-' + change.doc.id).style.backgroundColor = "Red";
         
         }
      }
      
    });
  });
};

FriendlyEats.prototype.getMasterInQuery = function(query, renderer) {
  query.onSnapshot(function(snapshot) {
    if (!snapshot.size) return renderer.empty(); // Display "There are no users".
    
   
    snapshot.docChanges().forEach(function(change) {
     

      console.log("Document data:",change.doc.data());
      var data = change.doc.data();

      MasterID = data['MasterID']

      console.log("Document data:",MasterID);

      
  // var mstrid = change.doc.data().doc.MasterID

        //  renderer.display(change.doc);
        
        
      
        
    
      
    });
    var query = firebase.firestore()
    .collection('Users')
    .orderBy('DeviceName')
    .where("DeviceMaster", "==", MasterID)
    .limit(50);
  
    FriendlyEats.prototype.getDocumentsInQuery(query, renderer);
  });
};

FriendlyEats.prototype.getRestaurant = function(id) {
  FriendlyEats.prototype.getRestaurant = function(id) {
    return firebase.firestore().collection('Users').doc(id).get();
  };
};

FriendlyEats.prototype.getFilteredUsers = function(filters, renderer) {
  /*
    TODO: Retrieve filtered list of users
  */
};

FriendlyEats.prototype.addRating = function(userID, rating) {
  /*
    TODO: Retrieve add a rating to a user
  */
};
