use std::collections::BTreeMap;

use futures_util::TryStreamExt;
use axum::{extract::{State}, http::HeaderMap, Json};
use sha2::Sha256;
use crate::{websocket::UserMessageExtend, login::Error};

use hmac::{Hmac, Mac};
use jwt::VerifyWithKey;
use mongodb::{
    bson::{doc, to_document, Document},
    options::{ClientOptions, FindOptions},
    Client, Database,
};


#[axum_macros::debug_handler]
 pub async fn get_message(
    State(db): State<Database>,
    header: HeaderMap,
) -> Result<Json<Vec<UserMessageExtend>>, Error> {
    if header.contains_key("AUTHENTICATION") {
        match header["AUTHENTICATION"].to_str() {
            Ok(token) => {
                let key: Hmac<Sha256> = Hmac::new_from_slice(b"wtsefhkjvsfvshkn").unwrap();

                let claims: Result<BTreeMap<String, String>, jwt::Error> =
                    token.verify_with_key(&key);

                if let Ok(claim) = claims {
                    let pk = &claim["key"];


                      // let messages = Vec::new();
                      let msg_collection = db.collection::<UserMessageExtend>("messages");
                        println!("{}",pk);
                      
             let filter = doc! {"public_key":"02c5691a77d679420c64aefd933451ba176a84c4fd3208eae1ae47092dfb74e319"};
                  
                      let mut cursor = msg_collection.find(filter, None).await.unwrap();
                        let mut extra_messages = Vec::new();
                      // Iterate over the results of the cursor.
                      while let Some(message) = cursor.try_next().await.unwrap() {
                        extra_messages.push(message);
                         
                      }
  




                    return Ok::<Json<Vec<UserMessageExtend>>, Error>(Json(
                       extra_messages
                    ));
                } else {
                    return Err::<Json<Vec<UserMessageExtend>>, Error>(
                        Error::SomethingElseWentWrong,
                    );
                }
            }
            Err(_) => {
                return Err(Error::SomethingElseWentWrong);
            }
        }
    }

    Err(Error::AuthenticationError)
}
