function notFound(req, res, next) {
  res.status(404).render('notFound', { pageTitle: 'Oops. 404', path: req.url });
}

export const errorController = {
  notFound,
};
