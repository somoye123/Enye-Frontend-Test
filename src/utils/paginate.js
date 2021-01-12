const Paginate = (profiles) => {
  const itemsPerPage = 20;
  const numberOfPages = Math.ceil(profiles.length / itemsPerPage);

  const newProfiles = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return profiles.slice(start, start + itemsPerPage);
  });

  return newProfiles;
};

export default Paginate;
