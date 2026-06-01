import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
export default function Index() {
    return (
        <ScrollView>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require("/home/escola/my-app/src/assets/castaldi.png")}
                    style={styles.illustration}
                />
                <Text style={styles.title}>Programação Mobile.</Text>
                <Text style={styles.subtitle}>Acesse sua conta</Text>
                <View style={styles.form}>
                    <Input placeholder="E-mail" keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Button label={"Logar"} />
                </View>
                <Text style={styles.footerText}>
                    Não tem uma conta ?{" "}
                    <Link href="/signup" style={styles.footerLink}>
                        Cadastre-se aqui.
                    </Link>
                </Text>
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDFDFD",
        padding: 32,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 18,
    },
    form: {
        marginTop: 30,
        gap: 24,
    },

    illustration: {
        width: "25%",
        height: 300,
    },

    footerText: {
        textAlign: "center",
        marginTop: 24,
        color: "#000000",
    },
    footerLink: {
        color: "#0A1172",
        fontWeight: 700,
    },
});
