const SplitFirstNameLastName = (fullName) => {
  const parts = fullName.split(' ');
  if (parts.length >= 2) {
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ');
    return { firstName, lastName };
  } else {
    return { firstName: fullName, lastName: '' };
  }
}

export default SplitFirstNameLastName;