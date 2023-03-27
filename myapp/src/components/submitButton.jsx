import React from 'react'
import { useFormContext } from 'react-hook-form';

export default function () {
    // const methods = useFormContext();
    const { handleSubmit } = useFormContext();

    return (
        <button type="submit" onClick={handleSubmit}>
            Submit
        </button>
    );
}
