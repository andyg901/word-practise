import "./App.scss";

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-text fs-4">Words practice</span>
        </div>
      </nav>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12 p-3">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form className="row align-items-center" 
                    onSubmit={event => {
                      event.preventDefault();
                      console.log(event.target);
                    }}>

                    <div className="col-12 d-inline-flex align-items-center">
                      <label>Load word list file (CSV only)</label>
                      <input
                        className="form-control w-auto mx-3 d-inline-block flex-grow-1"
                        type="file"
                        id="formFile"
                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      />
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
