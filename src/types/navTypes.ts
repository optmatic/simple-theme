export interface dropdownItems {
  name: string;
  href: string;
  description: string;
}

export interface mainMenuItems {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems: dropdownItems[];
}