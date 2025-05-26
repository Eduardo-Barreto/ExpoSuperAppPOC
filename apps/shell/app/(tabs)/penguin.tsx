import { StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function PenguinTab(){
    const penguinAppUri = process.env.EXPO_PUBLIC_PENGUIN_APP_URI || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
    return Platform.OS == 'web' ?
    (
        <iframe
            style={styles.container}
            src={penguinAppUri}
       />
    )
    : (
        <WebView
            style={styles.container}
            source={{ uri: penguinAppUri }}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
