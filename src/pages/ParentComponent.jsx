// import React, { useState, useEffect } from 'react';
// import { Button, Input, Spinner } from 'reactstrap';
// import NumberingButtons from './NumberingButtons'; // Adjust the import path based on your project structure
// import { io } from 'socket.io-client'; // Import socket.io-client
// import api from '../services/RoomService'; // Ensure you have this API service to handle the "Buy Now" action

// const ParentComponent = () => {
//   const [allSelectedValues, setAllSelectedValues] = useState([null]); // Initialize with one component
//   const [betPrice, setBetPrice] = useState(''); // State for bet price input
//   const [loading, setLoading] = useState(false); // State to manage the loader
//   const [rooms, setRooms] = useState([]); // State for active rooms
//   const [activeRoom, setActiveRoom] = useState(null); // State for active room
//   const socket = io(`${process.env.REACT_APP_BASE_URL}`); // Initialize socket connection

//   // Fetch rooms and handle real-time updates
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const response = await api.getActiveRooms();
//         setRooms(response.rooms || []);
//         const active = response.rooms.find(room => room.status === 'open');
//         setActiveRoom(active);
//       } catch (error) {
//         console.error('Error fetching rooms:', error);
//       }
//     };

//     fetchRooms();

//     // Listen for real-time room updates
//     socket.on('roomCreated', (newRoom) => {
//       setRooms((prevRooms) => [...prevRooms, newRoom]);
//       if (newRoom.status === 'open') setActiveRoom(newRoom);
//     });

//     socket.on('roomClosed', (closedRoom) => {
//       setRooms((prevRooms) =>
//         prevRooms.map(room => room.roomId === closedRoom.roomId ? closedRoom : room)
//       );
//       if (activeRoom && activeRoom.roomId === closedRoom.roomId) setActiveRoom(null);
//     });

//     // Request room updates every second
//     const intervalId = setInterval(() => {
//       socket.emit('requestRoomUpdates');
//     }, 1000);

//     // Cleanup the socket connection and interval on unmount
//     return () => {
//       socket.disconnect();
//       clearInterval(intervalId);
//     };
//   }, [socket, activeRoom]);

//   const handleAddClick = () => {
//     setAllSelectedValues((prevSelectedValues) => [...prevSelectedValues, null]); // Initialize with null
//   };

//   const handleRemoveClick = (index) => {
//     if (allSelectedValues.length === 1) {
//       return;
//     }
//     setAllSelectedValues((prevSelectedValues) =>
//       prevSelectedValues.filter((_, i) => i !== index)
//     );
//   };

//   const updateSelectedValues = (index, selectedDigit) => {
//     setAllSelectedValues((prevSelectedValues) => {
//       const newSelectedValues = [...prevSelectedValues];
//       newSelectedValues[index] = selectedDigit; // Update the value directly
//       return newSelectedValues;
//     });
//   };

//   const isBuyNowDisabled = () => {
//     const hasSelectedValues = allSelectedValues.some((value) => value !== null); // Check for non-null selections
//     return !hasSelectedValues || !betPrice || betPrice < 10 || betPrice > 10000;
//   };

//   const handleBuyNow = async () => {
//     if (isBuyNowDisabled()) {
//       return;
//     }

//     setLoading(true); // Show loader when Buy Now is clicked

//     try {
//       const selectedDigit = allSelectedValues.find(value => value !== null); // Get the selected digit
//       await api.participateInRoom(activeRoom.roomId, { betPrice, selectedDigit });
//       alert('Purchase successful!');
//     } catch (error) {
//       console.error('Error during purchase:', error);
//       alert('There was an issue processing your purchase.');
//     } finally {
//       setLoading(false); // Hide loader after the operation is complete
//     }
//   };

//   return (
//     <>

//       {activeRoom && activeRoom.status === 'open' ? (
//         <>
//           {/* Render dynamic components */}
//           {allSelectedValues.map((selectedDigit, index) => (
//             <div key={index}>
//               <NumberingButtons
//                 onRemove={() => handleRemoveClick(index)}
//                 onSelect={(newSelectedValues) => updateSelectedValues(index, newSelectedValues)}
//               />
//               {allSelectedValues.length > 1 ? (
//                 <Button
//                   onClick={() => handleRemoveClick(index)}
//                   color="danger"
//                   style={{
//                     marginLeft: '10px',
//                     backgroundColor: '#f5365c',
//                     color: 'white',
//                     borderRadius: '50%',
//                     margin: '9px',
//                     width: '60px',
//                     height: '60px',
//                     fontSize: '18px',
//                     border: '2px solid #ddd',
//                   }}
//                 >
//                   <i className="fa fa-trash-o" aria-hidden="true"></i>
//                 </Button>
//               ) : (
//                 <Button
//                   disabled
//                   color="danger"
//                   style={{
//                     marginLeft: '10px',
//                     backgroundColor: '#f5365c',
//                     color: 'white',
//                     borderRadius: '50%',
//                     margin: '9px',
//                     width: '60px',
//                     height: '60px',
//                     fontSize: '18px',
//                     border: '2px solid #ddd',
//                     opacity: 0.6,
//                     cursor: 'not-allowed',
//                   }}
//                 >
//                   <i className="fa fa-trash-o" />
//                 </Button>
//               )}
//               <hr />
//             </div>
//           ))}

//           {/* Bet Price Input */}
//           <div className="mb-4">
//             <label>
//               Bet Price (Min: 10, Max: 10000):
//               <Input
//                 type="number"
//                 min="10"
//                 max="10000"
//                 value={betPrice}
//                 onChange={(e) => setBetPrice(e.target.value)}
//                 placeholder="Enter bet price"
//               />
//             </label>
//           </div>

//           {/* Action Buttons */}
//           <div className="p-8 flex justify-center items-center">
//             {/* <button
//               type="button"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//               onClick={handleAddClick}
//             >
//               Add Digit
//             </button> */}
//             <button
//               type="button"
//               className={`text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isBuyNowDisabled() ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
//               onClick={handleBuyNow}
//               disabled={isBuyNowDisabled()}
//             >
//               {loading ? <Spinner size="sm" /> : 'Buy Now'}
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>No active rooms available.</p>
//       )}
      
//     </>
//   );
// };

// export default ParentComponent;
