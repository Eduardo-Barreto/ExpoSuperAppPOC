import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ChameleonTab(){
    const chameleonAppUri = process.env.EXPO_PUBLIC_CHAMELEON_APP_URI || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    return Platform.OS == 'web' ?
    (
        <iframe
            style={styles.container}
            src={chameleonAppUri}
       />
    )
    : (
        <WebView
            style={styles.container}
            source={{ uri: chameleonAppUri}}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
