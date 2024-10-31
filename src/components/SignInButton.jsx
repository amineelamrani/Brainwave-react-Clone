// export default function SignInButton() {
//   return (
//     <a
//       className="px-5 uppercase font-bold text-white transition hover:text-primary"
//       href="#"
//     >
//       Sign IN
//     </a>
//   );
// }

export default function SignInButton() {
  // This is my idea on the multiple color gradient border
  // Now need to now how to make that one like the shape needed
  return (
    <div className="flex max-w-sm rounded-xl pt-[2px] bg-gradient-to-r from-green-400 from-0% via-sky-500 via-30% to-primary to-90%">
      <div className="flex max-w-sm rounded-xl pb-[2px] bg-gradient-to-r from-yellow-400 to-pink-400 shadow-lg">
        <div className="flex max-w-sm rounded-xl pl-[2px] bg-gradient-to-t from-yellow-400 to-green-400">
          <div className="flex max-w-sm rounded-xl pr-[2px] bg-gradient-to-b from-primary to-pink-400">
            <button className="flex-1 uppercase font-bold text-white transition hover:text-primary bg-primary-content px-6 py-3 rounded-xl">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex max-w-sm rounded-xl pt-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    //   <div className="flex max-w-sm rounded-xl border-b-2 bg-gradient-to-r from-pink-300 to-blue-300 shadow-lg">
    //     <button className="flex-1 font-bold text-base text-white bg-primary-content px-6 py-3 rounded-xl">
    //       Gradient
    //     </button>
    //   </div>
    // </div>
  );
}
