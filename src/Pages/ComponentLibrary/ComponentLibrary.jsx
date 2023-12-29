import React, { useEffect, useState } from 'react';
import CodeDisplay from '../../Components/CodeDisplay/CodeDisplay';
import { FaSearch } from 'react-icons/fa';
import { useTheme } from '../../Provider/ThemeContext';

const ComponentLibrary = () => {
    const [codeDataList, setCodeDataList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const { isDarkMode } = useTheme();
    const [originalCodeDataList, setOriginalCodeDataList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('component.json');

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                setCodeDataList(data);
                setOriginalCodeDataList(data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault(); 

        if (searchInput.trim() === '') {
            setCodeDataList(originalCodeDataList);
        } else {
            const filteredData = originalCodeDataList.filter((codeData) =>
                codeData.category.toLowerCase() === searchInput.toLowerCase()
            );
            setCodeDataList(filteredData);
        }
    };

    return (
        <div>
            <form className='flex mx-2 mt-5 items-center lg:justify-end' onSubmit={handleSearch}>
                <input
                    type="text"
                    className={isDarkMode ? 'w-full md:w-96 rounded-l-lg  bg-zinc-800/80 p-2' : 'w-full md:w-96 rounded-l-lg  bg-zinc-300 p-2'}
                    placeholder='Search Mockups, Logos, Design Templates...'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <button type="submit" className='bg-gray-500 p-3 rounded-r-lg'>
                    <FaSearch className='' />
                </button>
            </form>
            <div>
                {codeDataList.map((codeData, index) => (
                    <CodeDisplay key={index} codeData={codeData} />
                ))}
            </div>
        </div>
    );
};

export default ComponentLibrary;
