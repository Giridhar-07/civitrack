import { Request, Response } from 'express';

export const getAboutInfo = (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    message: 'About information',
    data: {
      name: 'CiviTrack',
      tagline: 'Civic Issue Management Platform',
      description:
        'CiviTrack streamlines reporting, tracking, and resolution of civic issues, empowering communities and local government.',
      contactEmail: 'noreplycivitrack@gmail.com',
      socialLinks: {
        github: 'https://github.com/Giridhar-07',
        instagram: 'https://www.instagram.com/unknown_fan_07/'
      },
      version: process.env.npm_package_version || '0.1.0'
    }
  });
};