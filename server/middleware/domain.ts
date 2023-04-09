export default defineEventHandler((event): void => {
  let config = useRuntimeConfig();
  let { req, res, context } = event;

  let hostname = req.headers.host;

  let domain = [config.public.domain.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, '')];

  if (!domain.includes(hostname)) {
    let currentHost = hostname?.replace(`.${domain}`, '');
    context.subdomain = currentHost !== 'www' ? currentHost : null;
  }
});
