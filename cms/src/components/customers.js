import React, { useState, useEffect, useRef } from 'react';
import CustomerCard from '../components/customerCard';
import { useCollection } from '../hooks/useCollection';


function Customers() {
    let searchElement = useRef();
    let [query, setQuery] = useState("");

    // Instead of the message variable, we now use results. Results could either be a message or an array of CustomerdCard. Its initial state is a message because there isn't any data yet.
    let [results, setResults] = useState("Loading..");

    // Here we invoke the useCollection hook to get all customers.
    let [customers, done, deleteCustomer] = useCollection("customers");

    // An effect will be called when variables customers or query change.
    useEffect(() => {
        // If the data is not available yet, there isn't anything to do.
        if (!done) {
            return;
        }

        // We check if the user is currently searching for a specific customer. If that's the case, we filter all customers by a query. Otherwise, all customers are used.
        let foundCustomers = query
            ? customers.filter(c => c.companyName.toLowerCase().startsWith(query.toLowerCase()))
            : customers;

        // If there aren't any customers, we only show a message.
        if (foundCustomers.length === 0) {
            setResults("No results found.");
            return;
        }

        // Otherwise we map customers to customercards.
        setResults(foundCustomers.map(c => <CustomerCard
            onDelete={deleteCustomer}
            key={c.id}
            {...c}>
        </CustomerCard>));
    }, [customers, query])

    useEffect(() => {
        searchElement.current.focus();
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <input ref={searchElement} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="search" className="customers-query" />

            {results}
        </div>
    );
}

export default Customers;