import { Suspense } from 'react';


async function getData() {
    const res = await fetch('https://api.publicapis.org/entries');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function LargeData() {
    const data = await getData();

    return (
        <div>
            <Suspense fallback={<div>Loading data show first...</div>}>
                <div>Data render first</div>
            </Suspense>
            <Suspense fallback={<div>Loading data fetching ...</div>}>
                <div>
                    {JSON.stringify(data)}
                </div>
            </Suspense>
        </div>
    );
}