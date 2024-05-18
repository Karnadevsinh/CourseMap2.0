const DottedButton = () => {
    return (
      <button style={{background: 'lavenderblush'}} className="rounded-xl border-2 border-dashed border-black px-6 py-2 font-semibold text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
        Take Me
      </button>
    );
  };
  
  export default DottedButton;