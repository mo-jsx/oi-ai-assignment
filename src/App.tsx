function App() {
  return (
    <div className=" h-screen w-[100%] bg-white p-4">
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-4 bg-violet-200 border-2 border-black bg-violet p-4 h-full overflow-y-auto">
        <div className="grid place-content-center col-span-full md:col-span-3 xl:col-span-4 border-2 border-slate-500 bg-slate-200 w-full h-[450px] cursor-pointer">
          <h2 className="text-9xl text-slate-500 text-center">+</h2>
          <h3 className="text-3xl text-slate-500 text-center">
            Add a new chart
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
