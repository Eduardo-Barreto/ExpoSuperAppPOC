import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeTab(){
    const homeAppUri = process.env.EXPO_PUBLIC_HOME_APP_URI || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    return Platform.OS == 'web' ?
    (
        <iframe
            style={styles.container}
            src={homeAppUri}
       />
    )
    : (
        <WebView
            style={styles.container}
            source={{ uri: homeAppUri }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
