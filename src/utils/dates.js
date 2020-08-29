export const getLocaleDate = d =>
  d.replace(/^(\d{4})-(\d{2})-(\d{2}).*/g, "$3/$2/$1");

export const calculateAge = d => {
  const now = new Date();
  const date = new Date(d);

  let age = now.getFullYear() - date.getFullYear();

  if (
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
  ) {
    age--;
  }

  return age;
};
