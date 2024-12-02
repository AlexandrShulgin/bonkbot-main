import React from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Icons } from "../../assets/icons";
import styles from "./languageSelector.style";
import { Dispatch, SetStateAction } from 'react';

// Interface for component props
interface IProps {
    setModalVisible: Dispatch<SetStateAction<boolean | string>>;
    currentLanguage: string;
    selectLanguage: (language: string) => void; // Added this prop
}

// Language selector modal component
const LanguageSelector: React.FC<IProps> = ({ 
    setModalVisible, 
    currentLanguage, 
    selectLanguage 
}) => {
    return (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Select Language</Text>

                    {/* Language options */}
                    <TouchableOpacity
                        style={[
                            styles.languageButton,
                            currentLanguage === 'en' && styles.selectedLanguageButton
                        ]}
                        onPress={() => {
                            selectLanguage('en');
                            setModalVisible(false);
                        }}
                    >
                        <Text style={styles.languageText}>English</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.languageButton,
                            currentLanguage === 'fr' && styles.selectedLanguageButton
                        ]}
                        onPress={() => {
                            selectLanguage('fr');
                            setModalVisible(false);
                        }}
                    >
                        <Text style={styles.languageText}>French</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Icons.Close size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default LanguageSelector;