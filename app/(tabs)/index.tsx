import { StyleSheet, View } from "react-native";

import PlaceholderImage from '../../assets/images/background-image.png';
import ImageViewer from "@/components/ImageViewer";

export default function Index() {
  return (
    <View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer imgSource={PlaceholderImage} />
			</View>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25292e",
		alignItems: "center",
	},
	imageContainer: {
		flex: 1,
	},
})
