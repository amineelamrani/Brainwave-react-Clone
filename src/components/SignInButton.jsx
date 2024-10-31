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
            <svg
              width="120"
              height="50"
              className="uppercase text-white transition hover:text-primary rounded-b-xl rounded-tl-xl "
            >
              <a href="#">
                <path
                  d="M  0   0
             L 90   00
             L 180 40
             L  330  1000
             L   0 120
             Z"
                />

                <text
                  x="60"
                  y="25"
                  fill="#FFFFFF"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  I'm a link.
                </text>
              </a>
            </svg>
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

function svg_code() {
  return (
    <svg width="120" height="50">
      <a href="#">
        <path
          d="M  0   0
                   L 90   00
                   L 180 40
                   L  330  1000
                   L   0 120
                   Z"
          fill="#007BFF"
        />

        <text
          x="60"
          y="25"
          fill="#FFFFFF"
          text-anchor="middle"
          alignment-baseline="middle"
        >
          I'm a link.
        </text>
      </a>
    </svg>
  );
}
