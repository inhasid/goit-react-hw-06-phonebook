export const isDuplicate = (contacts, newContact) => {
  const normalizedName = newContact.name.toLowerCase();
  return contacts.some(item => item.name.toLowerCase() === normalizedName);
};
