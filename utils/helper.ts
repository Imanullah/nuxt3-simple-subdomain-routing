export const domainHost = () => {
  const config = useRuntimeConfig();

  let domain_host = process.server ? config.public.domain : config.domain;
  const host_name = domain_host.replace(/http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?/g, '');

  return host_name;
};

export const titleCase = (str) => {
  return useMap(useToLower(str).split(' '), useUpperFirst).join(' ');
};

export const getRoutePath = (path?: string) => {
  return path.replace(/\//g, '');
};

export const getDomainDetails = (req?: any) => {};
