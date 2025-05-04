export default function StatusBar() {
  return (
    <div className="flex justify-between items-center px-6 py-2 text-black">
      <div className="text-lg font-semibold">9:41</div>
      <div className="flex items-center space-x-1">
        <div className="w-6 h-3">
          <svg viewBox="0 0 24 12" fill="currentColor">
            <path d="M1,0 L19,0 C19.5522847,-1.01453063e-16 20,0.44771525 20,1 L20,11 C20,11.5522847 19.5522847,12 19,12 L1,12 C0.44771525,12 6.76353751e-17,11.5522847 0,11 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z" />
          </svg>
        </div>
        <div className="w-4 h-3">
          <svg viewBox="0 0 16 12" fill="currentColor">
            <path d="M8,0 C10.3196,0 12.4276,1.08342857 13.6834,2.82857143 L16,0 L16,12 L8.8,12 C11.1196,12 13.2276,10.9165714 14.4834,9.17142857 L12.1668,6.34285714 C11.4338,7.85142857 9.8324,8.91428571 8,8.91428571 C5.3478,8.91428571 3.2,6.76657143 3.2,4.11428571 C3.2,1.462 5.3478,-7.1054942e-15 8,-7.1054942e-15 Z" />
          </svg>
        </div>
        <div className="w-6 h-3 bg-black rounded-sm"></div>
      </div>
    </div>
  )
}
