function notFound(req, res, next) {
  console.log(req);
  res.status(404).render('notFound', { pageTitle: 'Oops. 404', path: req.url });
}

export const errorController = {
  notFound,
};
