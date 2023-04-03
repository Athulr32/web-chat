use axum::{
    routing::{get, post},
    Extension, Router, Json,
};
use futures_util::{lock::Mutex};
use serde::{Serialize, Deserialize};

use std::{collections::HashMap, sync::Arc};
use tokio::sync::broadcast;

use chat_server::login::{login};


use mongodb::{
    bson::{doc, to_document, Document},
    options::{ClientOptions, FindOptions},
    Client, Database,
};
use chat_server::get_message::get_message;
use chat_server::websocket::ws_handler;

use tower::{ServiceBuilder, ServiceExt, Service};
use tower_http::cors::{CorsLayer, Any};

#[derive(Serialize, Deserialize)]
struct Sample{
    data:String
}

#[axum_macros::debug_handler]
async fn foo()->Json<Sample>{


    Json(Sample{
        data:"fsd".to_string()
    })

}


#[tokio::main]
async fn main() {
    let state: Arc<Mutex<HashMap<String, broadcast::Sender<String>>>> =
        Arc::new(Mutex::new(HashMap::new()));

    let  client_options = ClientOptions::parse("mongodb://localhost:27017")
        .await
        .unwrap();

    let client = Client::with_options(client_options).unwrap();


    let db = client.database("ism");

    let cors = CorsLayer::new()
    .allow_methods(Any)
    .allow_origin(Any)
    .allow_headers(Any);



    let app = Router::new()
        .route("/", get(ws_handler))
        .route("/login", post(login))
        .route("/getMessage", get(get_message))
        .route("/sample",get(foo))
        .layer(Extension(state))
        .layer(cors)
        .with_state(db);

    axum::Server::bind(&"0.0.0.0:8081".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
