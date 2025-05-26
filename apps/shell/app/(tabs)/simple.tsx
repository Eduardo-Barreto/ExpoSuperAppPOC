import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SimpleTab(){
    const simpleAppUri = process.env.EXPO_PUBLIC_SIMPLE_APP_URI || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    return Platform.OS == 'web' ?
    (
        <iframe
            style={styles.container}
            src={simpleAppUri}
       />
    )
    : (
        <WebView
            style={styles.container}
            source={{ uri: simpleAppUri }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
