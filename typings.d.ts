



export interface SanityResBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
};

export interface BioInfo extends SanityBody {
    _type: "bioInfo";
    year: number;
    yearDescription: string;
};

export interface ProfileInfo extends SanityBody {
    _type: "profileInfo";
    bioInfo: BioInfo[],
    backgroundInformation: string;
    name: string;
    nameDescription: string;
    profileSticker: Image;
    projectsDescription: string;
};

export interface ProjectImg extends Image {
    key: string;
};

export interface Project extends SanityBody {
    _type: "projectInfo";
    disclaimer?: string;
    projectDescription: string;
    projectHistory: string;
    projectGallery: ProjectImg[];
    projectResponsiveImages : ProjectImg[];
    projectStack: string;
    projectSticker: Image;
    projectTitle: string;
    source: string;
    website: string;
};


export interface ProjectsArray extends SanityResBody {
    _type: "projectsArray";
    projectsArray: Project[];
};

export interface Social extends SanityBody {
    _type: "social";
    _id:string;
    title: string;
    url: string;
};


