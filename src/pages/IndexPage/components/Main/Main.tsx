import React, { useState } from 'react';
import "./Main.scss";

interface PhoneNumberItem {
    id: number;
    phoneNumber: string;
}

const PhoneNumberList: React.FC = () => {
    const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumberItem[]>([]);

    const addPhoneNumber = () => {
        const inputElement = document.getElementById('input-number') as HTMLInputElement;

        // console.log("inputElement" , inputElement);

        const newPhoneNumber = inputElement.value;

        console.log("newPhoneNumber", newPhoneNumber);

        if (!newPhoneNumber) {
            console.error('Введите номер телефона пожалуйста!');
            return;
        }

        if (phoneNumbers.some(item => item.phoneNumber === newPhoneNumber)) {
            console.error('Такой номер уже есть');
            return;
        }

        const newPhoneNumberItem: PhoneNumberItem = {
            id: phoneNumbers.length + 1,
            phoneNumber: newPhoneNumber,
        };

        console.log("newPhoneNumberItem", newPhoneNumberItem);
        console.log("phoneNumbers", phoneNumbers);

        setPhoneNumbers(prevPhoneNumbers => [...prevPhoneNumbers, newPhoneNumberItem]);
        inputElement.value = '';

        // console.log("setPhoneNumbers", setPhoneNumbers);
    };

    const removePhoneNumber = (id: number) => {
        setPhoneNumbers(prevPhoneNumbers => prevPhoneNumbers.filter(item => item.id !== id));
        // console.log(`Номер: ${}`)
    };

    return (
        <div className="Main">
            <div id="phonebook">
                <input
                    id="input-number"
                    placeholder="Введите номер телефона без +"
                    type="number"
                    pattern="^[0-9]+$"
                />
                <button className="add" onClick={addPhoneNumber}>
                    добавить номер телефона
                </button>
                <div id="phone-list">
                    {phoneNumbers.map(item => (
                        <div key={item.id} className="item">
                            <div data-id={item.id}>
                                <p className="number">{item.phoneNumber}</p>
                            </div>
                            <button className="remove" onClick={() => removePhoneNumber(item.id)}>
                                x
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhoneNumberList;