import React, { useState } from 'react';

const Timeline = ({ entries }) => {
    const [expandedItems, setExpandedItems] = useState(new Array(entries.length).fill(false));

    const handleToggle = (index) => {
        const updatedExpandedItems = [...expandedItems];
        updatedExpandedItems[index] = !updatedExpandedItems[index];
        setExpandedItems(updatedExpandedItems);
    };

    return (
        <div className="grid grid-cols-9 bg-blue h-auto ">
            {entries.map((entry, index) => (
                <>
                    <div className="col-span-2 h-16 mr-1">
                        {index !== 0 && index % 2 !== 0 &&
                            <>
                                <div className={`bg-white border-2 border-black hover:cursor-pointer rounded-md hover:bg-gray-200`} onClick={() => handleToggle(index)}>
                                    <h2 className="text-sm font-bold">{entry.title}</h2>
                                </div>
                            </>
                        }
                    </div>
                    <div className={`col-span-5 bg-black border-4 h-3 relative justify-center transition-all ${expandedItems[index] ? 'max-h-96 h-96' : 'max-h-0 duration-100 max-h-64 delay-700'}`}>
                        
                        <div className={`mt-2 text-md font-bold overflow-hidden transition-all  ${expandedItems[index] ?  'max-h-0' : 'duration-100 max-h-64 delay-700' }`}>
                            {entry.date}
                        </div>
                        
                        {index !== (entries.length - 1) && (index % 2 === 0 ?
                            <div className="absolute top-0 -right-1 bg-black w-3 h-16 border-4"></div>
                            :
                            <div className="absolute top-0 -left-1 bg-black w-3 h-16 border-4"></div>
                        )}
                        <div
                            className={` overflow-auto transition-all duration-500 ${expandedItems[index] ? 'max-h-96 h-96' : '  max-h-0'}`}
                        >
                            <div className="bg-gray-200 p-4">
                                {entry.description.map((section, i) => (
                                    <p className='text-left' key={i}>{section}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 h-16 ml-1">
                        {index % 2 === 0 &&
                            <>
                                <div className={`bg-white border-2 border-black hover:cursor-pointer hover:bg-gray-200 rounded-md`} onClick={() => handleToggle(index)}>
                                    <h2 className="text-sm font-bold">{entry.title}</h2>
                                </div>
                            </>
                        }
                    </div>
                </>
            ))}
        </div>
    );
};

export default Timeline;
{/* <div className="flex items-center mb-8">
            <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 text-white`}>
              {entry.date}
            </div>
            {index !== entries.length - 1 && (
              <div
                className={`w-12 h-2 bg-blue-500 ml-4 ${index % 2 === 0 ? 'mr-4' : 'ml-0'}`}
                style={{ marginTop: '6px', marginBottom: '6px' }}
              />
            )}
            <div className={`flex flex-col p-4 rounded-lg bg-blue-100`}>
              <h2 className="text-lg font-bold">{entry.title}</h2>
              <p className="text-sm">{entry.description}</p>
            </div>
          </div> */}