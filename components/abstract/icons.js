/* eslint-disable */
import { Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import SportIcon from "../../assets/svg/lottery/SportIcon";
import CommunicationIcon from "../../assets/svg/lottery/CommunicationIcon";
import HouseWorksIcon from "../../assets/svg/lottery/HouseWorksIcon";
import OutsideActivitiesIcon from "../../assets/svg/lottery/OutsideActivitiesIcon";
import GoOutIcon from "../../assets/svg/lottery/GoOutIcon";
import FoodIcon from "../../assets/svg/lottery/FoodIcon";
import EducationIcon from "../../assets/svg/lottery/EducationIcon";
import TravellingIcon from "../../assets/svg/lottery/TravellingIcon";

const icons = {
	0: ({color}) => {
		return <MaterialIcons name="sports-soccer" size={24} color={color? color: 'black'} />
	},
	1: ({color}) => {
		return <FontAwesome name="mobile-phone" size={24} color={color? color: 'black'} />
	},
	2: ({color}) => {
		return <Ionicons name="md-school-outline" size={24} color={color? color: 'black'} />
	},
	3: ({color}) => {
		return <Feather name="home" size={24} color={color? color: 'black'} />
	},
	4: ({color}) => {
		return <FontAwesome name="map-signs" size={24} color={color? color: 'black'} />
	},
	5: ({color}) => {
		return <Entypo name="drink" size={24} color={color? color: 'black'} />
	},
	6: ({color}) => {
		return <Ionicons name="fast-food-outline" size={24} color={color? color: 'black'} />
	},
	7: ({color}) => {
		return <MaterialIcons name="computer" size={24} color={color? color: 'black'} />
	},
	8: ({color}) => {
		return <MaterialIcons name="airplanemode-active" size={24} color={color? color: 'black'} />
	},
}

const lotteryIcons = {
	0: (props) => {
		return <SportIcon {...props}/>
	},
	1: (props) => {
		return <CommunicationIcon {...props}/>
	},
	2: (props) => {
		return <EducationIcon {...props}/>
	},
	3: (props) => {
		return <HouseWorksIcon {...props}/>
	},
	4: (props) => {
		return <OutsideActivitiesIcon {...props}/>
	},
	5: (props) => {
		return <GoOutIcon {...props}/>
	},
	6: (props) => {
		return <FoodIcon {...props}/>
	},
	7: (props) => {
		return <MaterialIcons name="computer" size={24} {...props} />
	},
	8: (props) => {
		return <TravellingIcon {...props}/>
	},
}

export default function getIconComponent(category, obj= {}) {
	if(icons[category]) {
		return icons[category](obj)
	}
}

export function getLotteryIcon(category, theme, obj= {}) {
	if(lotteryIcons[category]) {
		return lotteryIcons[category]({light: theme.light, ...obj})
	}
}
