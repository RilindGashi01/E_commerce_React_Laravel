import React from "react";
import { useAuth } from "../AuthContext";

const Profile = () => {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-warning text-center">
              Please log in to view your profile.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h3 className="card-title mb-0">Profile Information</h3>
            </div>
            <div className="card-body p-4">
              
              <div className="text-center mb-4">
                <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: '80px', height: '80px' }}>
                  <span className="text-white fw-bold fs-4">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
                <h4 className="mb-1">{user.name}</h4>
                <p className="text-muted">Member since {user.created_at}</p>
              </div>

              <div className="row">
                <div className="col-12">
                  <div className="mb-4">
                    <h5 className="border-bottom pb-2">Account Details</h5>
                    
                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted">Full Name:</strong>
                      </div>
                      <div className="col-sm-8">
                        <p className="mb-0">{user.name || 'Not provided'}</p>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted">Email Address:</strong>
                      </div>
                      <div className="col-sm-8">
                        <p className="mb-0">{user.email}</p>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-sm-4">
                        <strong className="text-muted">Member Since:</strong>
                      </div>
                      <div className="col-sm-8">
                        <p className="mb-0">{user.created_at}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-4">
                        <strong className="text-muted">Last Updated:</strong>
                      </div>
                      <div className="col-sm-8">
                        <p className="mb-0">{user.updated_at}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;