import DateReserve from "@/components/DateReserve"
import NameReserve from "@/components/NameReserve";
import IDReserve from "@/components/IDReserve";
export default function Booking(){
    return (
        <main className = 'w-[100%] flex flex-col items-center space-y-4'>
            <div className="text-xl font-medium">Booking</div>
            <div className = "w-fit space-y-2">
                <div className="text-md text-left text-gray-600">
                    Your Name</div>
                <NameReserve/>
                <div className="text-md text-left text-gray-600">
                    Your ID Card</div>
                <IDReserve/>
                <div className="text-md text-left text-gray-600">
                    Pick your vaccination Date</div>
                <DateReserve/>
                </div>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-400 px-3 py-2 shadow-sm text-white">Book your appointment</button>

            
        </main>
    );
}