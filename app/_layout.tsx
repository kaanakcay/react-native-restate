import {SplashScreen, Stack} from "expo-router";
import "./globals.css";
import {useFonts} from "expo-font";
import {useEffect} from "react";

export default function RootLayout() {
    // burada fontlari yukleyebiliriz
    const [fontsLoaded] = useFonts({
        'Rubik-Bold': require('../assets/fonts/Rubik-Bold.ttf'),
        'Rubik-ExtraBold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
        'Rubik-Light': require('../assets/fonts/Rubik-Light.ttf'),
        'Rubik-Medium': require('../assets/fonts/Rubik-Medium.ttf'),
        'Rubik-Regular': require('../assets/fonts/Rubik-Regular.ttf'),
        'Rubik-SemiBold': require('../assets/fonts/Rubik-SemiBold.ttf'),

    });

    useEffect (() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync(); //fontlar yuklendiginde splash screeni gizle
        }
    }, [fontsLoaded]); //burasi bos verildiginde ilk renderda calisir sadece bir kere, genelde veri cekmek, font yuklemek, animasyon baslatmak icin kullanilir

    // BILGI
    // useEffect(() => {
    //     console.log("Fontlar yüklendi:", fontsLoaded);
    // }, [fontsLoaded]);
    // Burada fontsLoaded değiştiğinde (örneğin false → true olunca) useEffect yeniden çalışır.
	// •	Yani: “Fontlar yüklendiğinde bir şey yap” demek gibi.

    if (!fontsLoaded) {
        return null; //stack e hic return etmesin
    }

    return <Stack screenOptions={{headerShown: false}} />;
}
