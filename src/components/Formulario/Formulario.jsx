import {  useForm } from "react-hook-form"

const Formulario = () => {

    const { register, formState:{ errors }, handleSubmit } = useForm () ;

    const onSubmit = (data) =>{
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit) } > 
            <div>
                <label >Nombre</label>
                <input type="text" {...register('Nombre', {
                    required: true,
                    maxLength: 6 
                })} />
                {errors.nombre?.type === 'required' && <p>El campo es obligatorio</p> }
                {errors.nombre?.type === 'maxLength' && <p>El campo debe tener menos de 6 caracteres</p> }
            </div>

            <div>
                <label >Correo</label>
                <input type="email" {...register('Correo',{
                    required:true
                })} />
            </div>

            <div>
                <label >Pais</label>
                <select {...register('Pais')}>
                    <option value="ar">Argentina</option>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                </select>
            </div>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default Formulario