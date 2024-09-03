import supertest from "supertest";
import app from "./app";

describe ( "post/users" , () => 
{
    describe ( "Usuario y clave son correctos" , () =>
        {
            /*
                Deberia ser un objeto JSON
                Deberia recibir un status 200
                Debe guardar en BD
                Debe tener JSON en el header
            */
        });

        describe ( "Usuario y clave incorrectos" , () =>
            {
                /*
                   Deberia responder un status 400
                */
            });

            test( "Deberia ser content-type igual a JSON" , async () =>
                {
                    const response = await supertest(app).post("/users").send(
                        {
                            username = "username",
                            password = "password"
                        });
                        expect (response.headers["content-type"]).toEqual(except.stringContaining("Json"));
                });
});