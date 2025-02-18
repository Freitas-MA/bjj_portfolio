export interface Data {
  pages: {
    home: {
      hero: {
        title: string;
        subtitle: string;
        heroImage: string;
      };
      about: {
        title: string;
        description: string;
      };
      statistics: Array<{
        id: number;
        label: string;
        value: string;
      }>;
      testimonials: Array<{
        id: number;
        name: string;
        testimonial: string;
      }>;
    };
    classes: {
      filters: string[];
      classes: Array<{
        id: number;
        name: string;
        description: string;
        image: string;
      }>;
    };
    instructors: {
      filters: string[];
      instructors: Array<{
        id: number;
        name: string;
        bio: string;
        image: string;
        specialty: string;
      }>;
    };
    dojos: {
      dojos: Array<{
        id: number;
        name: string;
        address: string;
        mapLink: string;
        images: string[];
        description: string;
      }>;
    };
    schedule: {
      days: string[];
      classes: Array<{
        id: number;
        day: string;
        time: string;
        class: string;
      }>;
    };
    contact: {
      address: string;
      phone: string;
      email: string;
      social: {
        facebook: string;
        instagram: string;
        youtube: string;
      };
    };
    privacyPolicy: {
      content: string;
    };
  };
}