const Page = ({name, desc, components}) => {
  return (
    <>
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-4 w-2/3">
        <div className="card card-primary-80 p-32 mb-4 flex flex-row justify-between items-center">
          <div>
            <h1 className="font-bold">{ name }</h1>
            <h4>{ desc }</h4>
          </div>
          {/* <span className="badge badge-info badge-lg">In Dev</span> */}
        </div>
        { components }
      </div>
    </div>
    </>
  )
}

export default Page

