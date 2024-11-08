const AddVolunteerPost = () => {
  return (
    <section className="p-6 bg-gray-900 text-gray-100">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-800">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Information</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Thumbnail" className="text-sm">
                Thumbnail
              </label>
              <input
                name="thumbnail"
                id="Thumbnail"
                type="text"
                placeholder="Thumbnail"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor=" PostTitle" className="text-sm">
                Post Title
              </label>
              <input
                name="title"
                id=" PostTitle"
                type="text"
                placeholder=" Post Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="category" className="text-sm">
                Category
              </label>
              <input
                name="category"
                id="Category"
                type="text"
                placeholder="Category"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Location
              </label>
              <input
                name="location"
                id="location"
                type="text"
                placeholder="location"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                Number of volunteer Needed
              </label>
              <input
                name="number"
                id="number"
                type="number"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                Deadline
              </label>
              <input
                id="state"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP / Postal
              </label>
              <input
                id="zip"
                type="text"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddVolunteerPost;
