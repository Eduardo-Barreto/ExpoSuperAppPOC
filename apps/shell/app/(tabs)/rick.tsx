import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ChameleonTab(){
    return Platform.OS == 'web' ?
    (
        <iframe
            style={styles.container}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
       />
    )
    : (
        <WebView
            style={styles.container}
            source={{ uri: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1' }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
