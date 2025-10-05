import api from './api';

export interface AboutInfo {
  name: string;
  tagline: string;
  description: string;
  contactEmail: string;
  socialLinks: {
    github: string;
    instagram: string;
  };
  version: string;
}

const aboutService = {
  getAbout: async (): Promise<AboutInfo> => {
    const response = await api.get<AboutInfo>('/about');
    return response.data;
  }
};

export default aboutService;