const AppartementOwnerInfo = ({ firstName, lastName }) => {
  return (
    <div className="Owner_name">
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default AppartementOwnerInfo;
