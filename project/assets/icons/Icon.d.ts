import * as React from 'react';

/** Every glyph available in the Tendix icon set. */
export type IconName =
  | "ArrowLeft" | "ArrowRight" | "ArrowSquareOut" | "Bell" | "CalendarBlank"
  | "CaretDown" | "CaretLeft" | "CaretRight" | "CaretUp" | "Check" | "CheckCircle"
  | "Clipboard" | "Clock" | "Cube" | "DotsThree" | "Envelope" | "Eye" | "EyeSlash"
  | "FileImage" | "FileText" | "Gear" | "Globe" | "GlobeSimple" | "GraduationCap"
  | "Headset" | "House" | "Image" | "Link" | "List" | "Lock" | "MagnifyingGlass"
  | "MapPin" | "PencilSimple" | "PersonArmsSpread" | "Plus" | "Prohibit" | "Scan"
  | "ShoppingBagOpen" | "ShoppingCartSimple" | "SignOut" | "Siren" | "TrashSimple"
  | "Truck" | "UploadSimple" | "User" | "Users" | "WarningCircle" | "X" | "XCircle";

/** Weight maps to Phosphor weights; supplementary UI glyphs only have "regular". */
export type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "color"> {
  /** Glyph name. */
  name: IconName;
  /** Stroke/fill weight. Default "regular". */
  weight?: IconWeight;
  /** Pixel size (width & height). Default 24. */
  size?: number | string;
  /** Convenience color (maps to CSS color → currentColor). */
  color?: string;
}

export declare function Icon(props: IconProps): JSX.Element;
export default Icon;
