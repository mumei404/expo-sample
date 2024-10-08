import { StatusBar, StyleSheet, View } from "react-native";

import PlaceholderImage from '../../assets/images/background-image.png';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

export default function Index() {
  return (
    <View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer imgSource={PlaceholderImage} />
			</View>
			<View style={styles.footerContainer}>
				<Button theme="primary" label="Choose a photo" />
				<Button label="Use this photo" />
			</View>
			<StatusBar style="auto" />
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
	footerContainer: {
		flex: 1 / 3,
		alignItems: "center",
	},
})
