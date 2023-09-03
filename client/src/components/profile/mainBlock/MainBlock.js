import React from 'react';
import './MainBlock.css';
import { connect } from 'react-redux';
import {
  uploadCover,
  uploadAvatar
} from '../../../store/actions/profileActions';
import Loading from '../../layout/loading/Loading';

const MainBlock = ({ user, uploadCover, uploadAvatar, authUser }) => {
  if (!user) {
    return <Loading />;
  }

  const {
    avatarUrl = '/images/avatar.jpg',
    _id,
    username,
    coverUrl,
    followers,
    following
  } = user;

  let text = 'No image...';
  const myStyle = {
    borderRadius: '5px',
    backgroundSize: 'cover',
    objectFit: 'fill',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '400px'
  };
  if (typeof coverUrl !== 'undefined') {
    myStyle.backgroundImage = `url(${coverUrl})`;
    text = '';
  }

  const changeCover = e => {
    const fd = new FormData();

    fd.append('cover', e.target.files[0], e.target.files[0].name);

    uploadCover(fd);
  };
  const changeAvatar = e => {
    const fd = new FormData();

    fd.append('avatar', e.target.files[0], e.target.files[0].name);

    uploadAvatar(fd);
  };
  return (
    <React.Fragment>
      <div
        className="jumbotron  mt-2 text-center bg-dark   profileCover "
        style={myStyle}
      >
        {text}

        {authUser === _id && (
          <div className="upload-btn-wrapper float-right">
            <i className="fa fa-camera fa-2x mr-2 "></i>

            <input onChange={e => changeCover(e)} type="file" name="cover" />
          </div>
        )}
      </div>
      <div className="text-center  ">
        <img className="profileImage" src={avatarUrl} alt="avatar" />
      </div>

      <div className="text-center ">
        {authUser === _id && (
          <div className="upload-btn-wrapper profileImageButton ">
            <i className="fa fa-camera fa-2x mr-2 text-light"></i>

            <input onChange={e => changeAvatar(e)} type="file" name="avatar" />
          </div>
        )}

        <div className="text-center  ">
          <h4 className="text-white">{username}</h4>
          <div className="d-flex  justify-content-center">
            <div className="followers m-2 ">
              <h6 className="text-info">Followers</h6>
              <p className="lead text-light">{followers.length}</p>
            </div>
            <div className="following m-2 ">
              <h6 className="text-info">Following</h6>
              <p className="lead text-light">{following.length}</p>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4 ">
            {authUser !== _id && (
              <div className="followUnfollow">
                <button className="btn btn-dark">
                  <i className="fa fa-user-plus mr-1 "></i> Follow
                </button>
                {/* <button className="btn btn-dark">
                <i className="fa fa-user-times mr-1 "></i> UnFollow
              </button> */}

                <button className="btn btn-danger">
                  <i className="fa fa-envelope mr-1"></i> Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    authUser: state.auth.currentUser.id
  };
};

export default connect(mapStateToProps, { uploadCover, uploadAvatar })(
  MainBlock
);
