export const useSubdomain = () => useState<string>('subdomain', () => null);

export const useUrl = (subdomain?: string) => {
  const config = useRuntimeConfig();
  const host_name = config.domain.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, '');

  let domain_host = process.server ? config.public.domain : config.domain;

  let localhost_url = subdomain ? `http://${subdomain}.${host_name}` : domain_host;
  let domain_url = subdomain ? `https://${subdomain}.${host_name}` : domain_host;

  return process.dev ? localhost_url : domain_url;
};

export const useHostname = () => domainHost(); // from utils helper
