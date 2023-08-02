const Page = ({name, desc, components}) => {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-3 w-full xl:w-3/4">
        <div className="card p-32 mb-2 flex flex-row justify-between items-center">
          <div>
            <h1 className="font-bold">{ name }</h1>
            <h4>{ desc }</h4>
          </div>
          {/* <span className="badge badge-info badge-lg">In Dev</span> */}
        </div>
        { components }
      </div>
    </div>
  )
}

export default Page

