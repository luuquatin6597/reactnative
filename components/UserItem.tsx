import { styles } from "@/app/_layout";
import { User } from "@/interface/User";
import { router } from "expo-router";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

export default function UserItem({ user, handleEdit, onDelete }: { user: User; handleEdit: (user: User) => void; onDelete: (id: string) => void }) {
    function dispatch(arg0: { type: string; payload: any; }) {
        throw new Error("Function not implemented.");
    }

    return (
        <View style={styles.userItem}>
            <TouchableOpacity onPress={() => router.push({ pathname: "/detailUser/[id]", params: { id: user.id } })}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>
            </TouchableOpacity>
            <View style={styles.userActions}>
                <TouchableOpacity
                    style={[styles.button, styles.editButton, styles.shadow]}
                    onPress={() => handleEdit(user)}
                >
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.deleteButton, styles.shadow]}
                    onPress={() =>
                        Alert.alert(
                            'Confirm Delete',
                            `Are you sure you want to delete ${user.name}?`,
                            [
                                { text: 'Cancel', style: 'cancel' },
                                {
                                    text: 'Delete',
                                    onPress: () => {
                                        onDelete(user.id);
                                        Alert.alert('Success', 'User deleted successfully!');
                                    },
                                },
                            ],
                            { cancelable: true }
                        )
                    }
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}