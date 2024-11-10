export default function MultiColorCover({ children }) {
  return (
    <div
      className={`flex w-full rounded-3xl pt-[1px] bg-gradient-to-r from-green-400 from-0% via-sky-500 via-30% to-primary to-90% mb-7`}
    >
      <div
        className={`flex w-full rounded-3xl pb-[1px] bg-gradient-to-r from-yellow-400 to-pink-400 shadow-lg`}
      >
        <div
          className={`flex w-full rounded-3xl pl-[1px] bg-gradient-to-t from-yellow-400 to-green-400`}
        >
          <div
            className={`flex w-full rounded-3xl pr-[1px] bg-gradient-to-b from-primary to-pink-400`}
          >
            <div className="rounded-3xl py-2 w-full bg-primary-content">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
