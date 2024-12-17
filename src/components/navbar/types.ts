export interface NavItemProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
