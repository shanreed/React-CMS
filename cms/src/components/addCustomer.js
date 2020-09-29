import React, {useState} from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import FieldValidator from "./validator";
import db from "../firebase/firebase";

function AddCustomer() {
    let [customer, form] = useForm({
        companyName: "",
        companyAddress: "",
        city: ""
    });
    
    let [saved, setSaved] = useState(false);

    async function onSubmit(e) {
        e.preventDefault();
        await db.collection("customers").add(customer);
        setSaved(true);
    }

    if (saved) {
        return <Redirect to="/customers/" />
    }

    return (
        <form onSubmit={onSubmit}>
            <FieldValidator required={true} value={customer.companyName} name="companyName" form={form}>
                <input type="text" className="addcustomer-input" />
            </FieldValidator>
            <FieldValidator required={true} value={customer.companyAddress} name="companyAddress" form={form}>
                <input type="text" className="addcustomer-input" />
            </FieldValidator>
            <FieldValidator required={true} value={customer.city} name="city" form={form}>
                <input type="text" className="addcustomer-input" />
            </FieldValidator>
            <button type="submit" disabled={!form.isValid()}>add customer</button>
        </form>
    )
}

export default AddCustomer;