import useGetData from "../custom-hooks/GetData.js"
import SelectBox from "./SelectBox.jsx"

const DataTable = () => {
    const {carData, getData} = useGetData()
  return (
    <div>
        <table className="mt-12 table-auto">
            <thead>
                <tr className="bg-yellow-300">
                    <th>Select</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {carData.map((car, key) =>{
                    if(key%2 == 0){
                        return (
                            <tr className="bg-slate-100" key={key}>
                                <td className="px-8"><SelectBox id={car.id}/></td>
                                <td className="px-8">{car.make}</td>
                                <td className="px-8">{car.model}</td>
                                <td className="px-8">{car.year}</td>
                            </tr>
                        )
                    }
                    else{
                        return (
                            <tr className="bg-slate-300" key={key}>
                                <td className="px-8"><SelectBox id={car.id}/></td>
                                <td className="px-8">{car.make}</td>
                                <td className="px-8">{car.model}</td>
                                <td className="px-8">{car.year}</td>
                            </tr>
                        )
                    }
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default DataTable