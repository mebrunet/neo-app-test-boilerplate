// Implements simple mapping between icon files, and icon names in the room model / DB

var iconMapping = {
  defaultRoomIcon: {displayName: "Room", fileName: "Room Filled-100.png"},
  kitchen: {displayName: "Kitchen", fileName: "Kitchen-100.png"},
  bedroom: {displayName: "Bedroom", fileName: "Bed Filled-100.png"},
  livingRoom: {displayName: "Living Room", fileName: "Living Room-100.png"},
  bathroom: {displayName: "Bathroom", fileName: "Shower and Tub-100.png"},
  office: {displayName: "Office", fileName: "Desk Lamp-100.png"},
  diningRoom: {displayName: "Dining Room", fileName: "Dining Room-100.png"},
  tvRoom: {displayName: "TV Room", fileName: "Widescreen TV-100.png"}
};

var getRoomIcon = (icon) => {
  if (iconMapping[icon]){
    return iconMapping[icon];
  }
  return iconMapping.defaultRoomIcon;
};

export default iconMapping;
export {getRoomIcon};
