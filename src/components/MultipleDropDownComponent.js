import React from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import { data } from '../utils/Constants'

function MultipleDropDownComponent() {

    let selectedValues = [];

    const [values, setValues] = React.useState([])

    const onSelect = (selectedList, selectedItem) => {

        selectedValues.push(selectedItem)

        setValues([
            ...values,
            selectedItem
        ])

        console.log(JSON.stringify(selectedValues))
    }

    const onRemove = (selectedList, removedItem) => {
        console.log('selectedList: ' + JSON.stringify(selectedList))
        console.log('removedItem: ' + JSON.stringify(removedItem))
    }

    return (
        <div>
            <h1> Multiple Select DropDown </h1>
            <Multiselect
                options={data}
                displayValue="label"
                groupBy="brand"
                onSelect={onSelect}
                selectionLimit={5}
                closeIcon='cancel'
                oneRemove={onRemove}
                placeholder='Select another measurement'
                showCheckbox={true}
            />
            <h3>Valores Seleccionados</h3>
            {
                values.length > 0 ? (
                    <ul>
                        { values.flatMap((v) => {
                            return <li key={v.id}>{v.label}</li>
                        })}
                    </ul>

                ) : (<h1>Sin data</h1>)
            }
        </div>
    )
}

export default MultipleDropDownComponent;