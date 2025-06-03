import PropTypes from "prop-types";

const MacWindow = ({ children, className = "" }) => {
   return (
      <div
         className={`macwindow-frame relative rounded-2xl overflow-hidden ${className}`}
      >
         {/* Top bar */}
         <div className="macwindow-bar flex items-center h-10 px-4 border-b border-gray-300/30">
            {/* Traffic lights */}
            <div className="flex space-x-2">
               <span className="w-3 h-3 rounded-full bg-red-500 shadow-md border border-red-800/40 macwindow-traffic"></span>
               <span className="w-3 h-3 rounded-full bg-yellow-400 shadow-md border border-yellow-800/40 macwindow-traffic"></span>
               <span className="w-3 h-3 rounded-full bg-green-500 shadow-md border border-green-800/40 macwindow-traffic"></span>
            </div>
            <div className="flex-1"></div>
         </div>
         {/* Shine overlay */}
         <div className="macwindow-shine pointer-events-none"></div>
         {/* Content area */}
         <div className="p-8 sm:p-12 bg-black/60 min-h-[200px] flex flex-col justify-center items-center macwindow-content">
            {children}
         </div>
      </div>
   );
};

MacWindow.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string,
};

export default MacWindow;
