import React,{ Component } from 'react';
import './App.css';

class Profile extends Component {
	
	render(){
		let artist = {name: '', followers: { total: ''},images: [{url: ''}], genres: []};
		artist = this.props.artist !== null ? this.props.artist: artist;
		

		return (

			<div className="profile">
				<img

				alt="Profile"
				className="profile-img"
				src={artist.image[0].url}

				/>
				<div>{artist.name}</div>
				<div>{artist.followers.total}</div>
				<div>

					{
						artist.genres.map((genre, k)=> {

						genre = genre !== artist.genres[artist.genres.length-1] ? `${genre},`:`&${genre}`
						return(

						<span key ={k}>{genre}</span>

							)
						})
					}

				</div>
			</div>
		)
	}
}

export default Profile;