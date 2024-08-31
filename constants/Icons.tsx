import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface IconProps {
    color: string;
    size: number;
}

export const HomeIcon = (props: IconProps) => (
    <Entypo name="home" size={props.size} color={props.color} />
)

export const ModelsIcon = (props: IconProps) => (
    <MaterialIcons name="auto-awesome-mosaic" size={props.size} color={props.color} />
)

export const IndustryIcon = (props: IconProps) => (
    <FontAwesome name="industry" size={props.size} color={props.color} />
)

export const BurgerOpenIcon = (props: IconProps) => (
    <FontAwesome5 name="grip-lines-vertical" size={props.size} color={props.color} />
)

export const BurgerCloseIcon = (props: IconProps) => (
    <FontAwesome5 name="grip-lines" size={props.size} color={props.color} />
)
