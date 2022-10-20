const lista_destinos = ["Madryn", "Comodoro Rivadavia","Bariloche", "Ushuaia", "Las Grutas", "Bahia Blanca"];
const precios_de_destinos = [2000, 3500, 4000, 5000, 6000, 7000];
let destino_elegido;

class User{
    constructor(nombre , surname, mail){
        this.name = nombre;
        this.surname = surname;
        this.mail = mail;
        this.precio = "";
        this.cuotas = "";
        this.precio_final = "";
    }
    
    set_price(destino){
        this.destino = parseInt(destino);
        console.log("destino tipo de dato", typeof(this.destino));
        console.log("El destino elegido es", this.destino);
        if(this.destino == 1){
            this.precio = precios_de_destinos[0];
            // console.log(this.precio);
            return this.precio
        
        } else if (this.destino == 2){
            this.precio = precios_de_destinos[1];
            // console.log(this.precio);
            return this.precio

        } else if (this.destino == 3){
            this.precio = precios_de_destinos[2];
            // console.log(this.precio);        
            return this.precio

        } else if (this.destino == 4){
            this.precio = precios_de_destinos[3];
            // console.log(this.precio);

            return this.precio
        
        } else if (this.destino == 5){
            this.precio = precios_de_destinos[4];
            // console.log(this.precio);

            return this.precio
        
        } else if (this.destino == 6){
            this.precio = precios_de_destinos[5];
            // console.log(this.precio);

            return this.precio
        
        }else {
            console.log("debe elegir un destino valido: 1 Puerto Madryn. 2 Comodor. 3 Bariloche. 4 Ushuaia. 5 Las Grutas. 6 Bahia Blanca.");
        }

        
    }

    
    calcular_precio_final(cuotas){
        this.cuotas = parseInt(cuotas);
        console.log("tipo de dato", typeof(this.cuotas));
        console.log("las cuotas son", this.cuotas);

        if(cuotas == 1){
            this.precio_final = this.precio;
            console.log("El precio final es: " + this.precio_final + " (sin intereses!)")
            return this.precio_final;
        } else if(cuotas == 3){
            this.precio_final = this.precio + 2000;
            console.log("El precio final es: " + this.precio_final );
            return this.precio_final;
        } else if(cuotas == 6){
            this.precio_final = this.precio + 4000;
            console.log("El precio final es: " + this.precio_final );
            return this.precio_final;
        } else {
            this.precio_final = "No se pudo efectuar la compra.";
            console.log("Ingrese un numero de cuotas valido, 1, 3 o 6.")
            console.log(this.precio_final);
            return this.precio_final;
        }
    
    };

    confirmation(){
        console.log("Muchas gracias " + this.name + " por elegirnos para volar. A la brevedad recibirá detalles de la compra al correo " + this.mail + ".El monto a abonar es de:" + this.precio_final);
    }

}
let nombre = prompt("Ingrese su nombre");
let surname = prompt("ingrese su apellido");
let email = prompt("ingrese su correo");
let destino = prompt("Ingrese el destino al que desea viajar: 1 Puerto Madryn. 2 Comodor. 3 Bariloche. 4 Ushuaia. 5 Las Grutas. 6 Bahia Blanca");
let cuotas = prompt("Seleccione la cantidad de cuotas: 1, 3 o 6");
let user_1 = new User(nombre, surname, email);

/*probando enviar destino y cuotas por parametro para chequear que funcionan los métodos */
user_1.set_price(destino);
user_1.calcular_precio_final(cuotas);
user_1.confirmation();
