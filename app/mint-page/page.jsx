import React from "react";

function page() {
  return (
    <div className="rounded flex items-center justify-center h-[60vh] w-[40vw] bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient">
      <div className="w-3/4 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold">Welcome to my website!</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
          aliquet velit, a ullamcorper leo. Sed eget felis vel massa ultrices
          maximus. Sed ut lorem sagittis, blandit lectus a, venenatis neque.
          Quisque vel turpis non ligula efficitur maximus. Suspendisse potenti.
        </p>
      </div>
    </div>
  );
}

export default page;
