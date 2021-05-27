export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container flex-column'>
        <div className='col-md-8 col-md-offset-2'>
          <h2>Meet the Developer</h2>
        </div>
        <div id='row' className='flex-center'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <p>{d.email}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
