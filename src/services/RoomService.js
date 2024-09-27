import dashboardAxios from './HttpService';

const END_POINT = 'room';

// Room-related API calls
const getActiveRooms = async () => {
    const response = await dashboardAxios.get(`${END_POINT}/current-room`); // Adjust endpoint to fetch active rooms
    return response.data;
};

const participateInRoom = async (roomId, { betPrice, selectedDigit }) => {
    console.log(roomId, { betPrice, selectedDigit })
    try {
        const response = await dashboardAxios.post(`${END_POINT}/join-room/${roomId}`, {
            betPrice,   
            selectedDigit 
        });
        return response.data;
    } catch (error) {
        console.error('Error participating in room:', error);
        throw error;
    }
};


// Export all functions
export default {
    getActiveRooms,
    participateInRoom
};
