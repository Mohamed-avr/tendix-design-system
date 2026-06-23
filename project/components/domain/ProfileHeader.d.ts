import * as React from 'react';

export interface ProfileHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  greeting?: string;
  avatarSrc?: string;
  status?: 'online' | 'busy' | 'away';
  /** Show the globe / language button. */
  showLanguage?: boolean;
  onBell?: () => void;
  onLanguage?: () => void;
}

/** Home-screen greeting pill: avatar + name + greeting + chrome buttons. */
export declare function ProfileHeader(props: ProfileHeaderProps): JSX.Element;
export default ProfileHeader;
