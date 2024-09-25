// Either types para el manejo de errores en typescript

/* 

Un Either Type es una estructura de datos que puede contener uno de dos tipos:
    - un valor exitoso (también conocido como "right")
    - o un valor de error(también conocido como "left")

    Esto permite manejar escenarios en los que se espera que algo salga mal, 
    sin tener que recurrir a lanzar excepciones o interrumpir el flujo del programa.
 */

// Clase Success/Rigth para la respuesta de valores que esperamos
export class Success<T = undefined> {
    constructor(public value?: T) { }

    // El método Create nos ayuda a crear una respuesta de tipo Success
    static create<T = undefined>(value?: T) {
        return new Success(value)
    }

    // El método Check nos ayuda a validar el estado de la respuesta sí es exitosa
    static check<U, T>(either: Failure<U> | Success<T>): either is Success<T> {
        return either instanceof Success;
    }
}

// Classe Failure/Left para la respuesta de un error controlado
export class Failure<T = undefined> {
    constructor(public error?: T) { }

    // El método Create nos ayuda a crear una respuesta de tipo Failure
    static create<T = undefined>(error?: T) {
        return new Failure(error)
    }

    // El método Check nos ayuda a validar el estado de la respuesta sí es un error
    static check<U, T>(either: Failure<U> | Success<T>): either is Failure<U> {
        return either instanceof Failure;
    }
}

export type Result<U, T> = Failure<U> | Success<T>

export type AsyncResult<U, T> = Promise<Failure<U>> | Promise<Success<T>>
