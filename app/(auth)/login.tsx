import { COLORS } from '@/constants/theme'
import { styles } from '@/styles/auth.styles'
import { useSSO } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function Login() {

    const { startSSOFlow } = useSSO();
    const router = useRouter();
    const handleGoogleSignin = async () => {
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy: 'oauth_google' });
            if (setActive && createdSessionId) {
                setActive({ session: createdSessionId });
                router.replace('/(tabs)')
            }
        } catch (error) {
            console.error('Error during Google SSO flow:', error);

        }
    };
    return (
        <View style={styles.container} id='login'>
            {/* Brand Section */}

            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name='leaf' size={32} color={COLORS.primary} />
                </View>
                <Text style={styles.appName}>spotlight</Text>
                <Text style={styles.tagline}>don't miss anything</Text>
            </View>

            {/* ILLUSTRATION */}
            <View style={styles.illustrationContainer}>
                <Image
                    source={require("../../assets/images/auth-bg.png")}
                    style={styles.illustration}
                    resizeMode='contain'
                />
            </View>
            {/* LOGIN WITH GOOGLE BUTTON */}
            <View style={styles.loginSection}>
                <TouchableOpacity
                    style={styles.googleButton}
                    onPress={handleGoogleSignin}>
                    <View style={styles.googleIconContainer}>
                        <Ionicons name='logo-google' size={24} color={COLORS.primary} />
                    </View>
                    <Text style={styles.googleButtonText}>Login with Google</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>
                    By continuing, you agree to our Terms of Service and Privacy Policy.
                </Text>
            </View>

        </View>
    )
}