export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>APP STORE</h2>
        </div>
        <div className='row flex-center'>
          <a href='https://apps.apple.com/app/id1442755816' target="_blank" rel="noreferrer">
            <img src='img/applestore.png' className='img-responsive navbar-brand app-store-image' alt=''/>
          </a>
          <a href='https://play.google.com/store/apps/details?id=com.edattukaran.acerail' target="_blank" rel="noreferrer">
            <img src='img/googleplay.png' className='img-responsive navbar-brand app-store-image' alt=''/>
          </a>
        </div>
      </div>
    </div>
  )
}
