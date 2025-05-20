const AppartementOwnerPicture = ({ photoUrl, altText }) =>{
    return(
            <img 
      src={photoUrl} 
      alt={altText || "Photo du propriétaire"}
      className="owner-photo"
        />
    )
}

export default AppartementOwnerPicture;