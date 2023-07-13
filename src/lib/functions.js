import { SRGBColorSpace } from "three";

export const mapColorSpace = (maps) => {
  maps.map.colorSpace = SRGBColorSpace;
};
