import React,{ Component } from 'react';
import './App.css';

class Profile extends Component {
render() {
  let artist = this.props.artist;
  let art = '';
  if(artist !== null){
    return(
      <div>
      <div className="profile">
      <img alt="profile" className="profile-img" src={artist.artworkUrl100}/>
      <div className="profile-info">
      <div className="profile-name">{artist.artistName}</div>
      <div className="country">{artist.country}</div>
      <div className="genre">Primary Genre: {artist.primaryGenreName}</div>
      </div>
      </div>
      <div className="starter">Top Tracks     <i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></div>
      </div>
    )
  }else{
    return(
      <div>
      <div>Top Artists</div>
      <div className="track">
        <img className="trackImg" alt="taylor Swift" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpy0BpwrdJc5sBNAPXxq-8CQejPyeGMWc-0MSIZRXovUu3ZX43" />
        <p className="trackText">Taylor Swift</p>
      </div>
      <div className="track">
        <img className="trackImg" alt="Ed Sheeran" src="https://turntable.kagiso.io/images/1A7A0248_Fin.width-800.jpg" />
        <p className="trackText">Ed Sheeran</p>
      </div>
      </div>
    )
  }

}

}

export default Profile;
