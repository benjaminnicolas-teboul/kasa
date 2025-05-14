const AppartementOwnerPicture = ({ photoUrl, altText }) =>{
    return(
            <img 
      src={photoUrl} 
      alt={altText || "Photo du propriétaire"} 
        />
    )
}

export default AppartementOwnerPicture;