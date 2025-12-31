import React from 'react';

const Cards = () => {
  return (
    <div>
      <h4 className="fw-bold py-3 mb-4">Cards</h4>

      <div className="row">
        {/* Basic Card */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Basic Card</h5>
              <p className="card-text">
                This is a basic card with some content. You can add any content here.
              </p>
              <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* Card with Header */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">Featured</div>
            <div className="card-body">
              <h5 className="card-title">Card with Header</h5>
              <p className="card-text">This card has a header section at the top.</p>
              <a href="#" className="btn btn-outline-primary" onClick={(e) => e.preventDefault()}>
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Card with Footer */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card with Footer</h5>
              <p className="card-text">This card includes a footer at the bottom.</p>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>

        {/* Statistics Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold d-block mb-1">Total Sales</span>
                  <h3 className="card-title mb-1">$21,450</h3>
                  <small className="text-success fw-semibold">
                    <i className="bx bx-up-arrow-alt"></i> +18.2%
                  </small>
                </div>
                <div className="avatar flex-shrink-0">
                  <span className="avatar-initial rounded bg-label-primary">
                    <i className="bx bx-dollar"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold d-block mb-1">New Users</span>
                  <h3 className="card-title mb-1">1,240</h3>
                  <small className="text-success fw-semibold">
                    <i className="bx bx-up-arrow-alt"></i> +12.5%
                  </small>
                </div>
                <div className="avatar flex-shrink-0">
                  <span className="avatar-initial rounded bg-label-success">
                    <i className="bx bx-user"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Card 3 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="fw-semibold d-block mb-1">Total Orders</span>
                  <h3 className="card-title mb-1">852</h3>
                  <small className="text-danger fw-semibold">
                    <i className="bx bx-down-arrow-alt"></i> -4.3%
                  </small>
                </div>
                <div className="avatar flex-shrink-0">
                  <span className="avatar-initial rounded bg-label-warning">
                    <i className="bx bx-shopping-bag"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Card */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img className="card-img-top" src="https://via.placeholder.com/400x200" alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Image Card</h5>
              <p className="card-text">This card features an image at the top.</p>
              <a href="#" className="btn btn-primary" onClick={(e) => e.preventDefault()}>
                View Details
              </a>
            </div>
          </div>
        </div>

        {/* List Group Card */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-header">List Group</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First item</li>
              <li className="list-group-item">Second item</li>
              <li className="list-group-item">Third item</li>
            </ul>
          </div>
        </div>

        {/* Action Card */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Action Card</h5>
              <p className="card-text">Quick example text to build on the card and make up the bulk.</p>
              <a href="#" className="card-link" onClick={(e) => e.preventDefault()}>
                Card link
              </a>
              <a href="#" className="card-link" onClick={(e) => e.preventDefault()}>
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
