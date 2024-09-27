// import React, { useEffect, useState } from 'react';
// import { io } from 'socket.io-client';
// import api from '../../services/RoomService'; // Make sure this service has the necessary API calls

// const RoomList = () => {
//     const [rooms, setRooms] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [betPrice, setBetPrice] = useState(''); // State for betPrice
//     const [selectedDigit, setSelectedDigit] = useState(''); // State for selected digit
//     const socket = io(`${process.env.REACT_APP_BASE_URL}`); // Connect to your backend server

//     useEffect(() => {
//         const fetchRooms = async () => {
//             try {
//                 const response = await api.getActiveRooms(); // Fetch active rooms
//                 setRooms(response.rooms || []);
//             } catch (error) {
//                 console.error('Error fetching rooms:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchRooms();

//         // Listen for real-time updates from the server
//         socket.on('roomCreated', (newRoom) => {
//             setRooms((prevRooms) => [...prevRooms, newRoom]);
//         });

//         socket.on('roomClosed', (closedRoom) => {
//             setRooms((prevRooms) =>
//                 prevRooms.map(room => room.roomId === closedRoom.roomId ? closedRoom : room)
//             );
//         });

//         // Call socket every second
//         const intervalId = setInterval(() => {
//             socket.emit('requestRoomUpdates'); // Emit an event to request room updates from the server
//         }, 0);

//         // Cleanup socket connection and interval
//         return () => {
//             socket.disconnect();
//             clearInterval(intervalId);
//         };
//     }, [socket]);

//     const joinRoom = async (roomId) => {
//         try {
//             if (!betPrice || !selectedDigit) {
//                 alert('Please enter a bet price and select a digit.');
//                 return;
//             }

//             await api.participateInRoom(roomId, { betPrice, selectedDigit });
//             alert('Joined room successfully!');
//         } catch (error) {
//             console.error('Error joining room:', error);
//         }
//     };

//     if (loading) {
//         return <div>Loading rooms...</div>;
//     }

//     return (
//         <div>
//             <h2>Active Rooms</h2>
//             <ul>
//                 {rooms.map(room => (
//                     <li key={room.roomId}>
//                         {room.roomId} - Status: {room.status}
//                         <br />
//                         Time Left: {Math.floor(room.remainingTime / 1000)} seconds
//                         <br />
                        
//                         {/* Input for Bet Price */}
//                         <label>
//                             Bet Price: 
//                             <input
//                                 type="number"
//                                 value={betPrice}
//                                 onChange={(e) => setBetPrice(e.target.value)}
//                                 placeholder="Enter bet price"
//                             />
//                         </label>
//                         <br />
                        
//                         {/* Select for Digit (1 to 36) */}
//                         <label>
//                             Select Digit:
//                             <select
//                                 value={selectedDigit}
//                                 onChange={(e) => setSelectedDigit(e.target.value)}
//                             >
//                                 <option value="" disabled>Select a digit</option>
//                                 {Array.from({ length: 36 }, (_, i) => i + 1).map((digit) => (
//                                     <option key={digit} value={digit}>
//                                         {digit}
//                                     </option>
//                                 ))}
//                             </select>
//                         </label>
//                         <br />
                        
//                         {room.status === 'open' && (
//                             <button onClick={() => joinRoom(room.roomId)}>
//                                 Join Room
//                             </button>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default RoomList;
