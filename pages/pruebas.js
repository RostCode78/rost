import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

const pruebas = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    
    return (
        <Layout>
            <div className="margen">

                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <h1>{count}</h1>

                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >
                decrement
                </button>

            </div>
        </Layout>
    )
}

export default pruebas;