import Config from "../../../../config/configFile";

export default class Database {
    static firebase;
    static database;

    static retrieve() {
        console.log(window.firebase);
        this.firebase = window.firebase;

        return this;
    }

    static assignTo(srcCmp, cmpPty) {
        this.firebase.initializeApp({
            authDomain: Config.AUTH_DOMAIN,
            databaseURL: Config.DB_URL
        });

        this.firebase
            .database()
            .ref(`/${Config.TABLE_NAME}`)
            .once("value")
            .then((result) => {
                this.database = result.val();

                srcCmp[cmpPty] = this.database;

                FileSystem.debug(this.database);
            });
    }
}
