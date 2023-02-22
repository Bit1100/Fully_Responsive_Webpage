/* Routes Types */
export type routeChildren = { path: string; element: JSX.Element };

export type route = {
  path?: string;
  element: JSX.Element;
  index?: boolean;
  children?: routeChildren[];
};

export type routeType = {
  path?: string;
  index?: boolean;
  element: JSX.Element;
  children?: route[];
};

export type routesType = routeType[];

/* Context Types */
export type initialStateType = {
  isScaled: boolean;
};

export type actionType = {
  type: string;
  payload?: boolean;
};

export type appContextType = {
  state: initialStateType;
  dispatch: React.Dispatch<actionType>;
  handleScroll: (props: HTMLDivElement) => void;
  servicesRef: React.MutableRefObject<HTMLDivElement>;
  footerRef: React.MutableRefObject<HTMLDivElement>;
  homeRef: React.MutableRefObject<HTMLDivElement>;
  eventsRef: React.MutableRefObject<HTMLDivElement>;
  subscribeRef: React.MutableRefObject<HTMLDivElement>;
};

/* Section Component Types */
export type InfoType = {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
};

export type InfosType = {
  key: string;
  info: InfoType;
};

export type EventType = {
  id: string;
  icon: string;
  event: string;
};

export type EventsType = {
  key: string;
  event: EventType;
};

/* Miscellaneous Types */
export type children = {
  children: React.ReactNode;
};

export type ImageType = {
  name: string;
  altText: string;
  className?: string;
  width?: string;
  height?: string;
  onClick?: React.Dispatch<actionType>;
};

export type IsActiveType = {
  isActive: boolean;
};

export type HeadingType = {
  heading: string;
};
