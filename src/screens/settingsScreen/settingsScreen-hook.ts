import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { NavigationParamList } from "../../navigation/mainNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import i18n from "../../locale/i18n";

// Navigation props type
type Props = NativeStackScreenProps<NavigationParamList, "SETTINGSSCREEN">;

// Custom hook for settings screen logic
export default () => {
    // State for modal visibility and language selection
    const [modalVisible, setModalVisible] = useState<string | boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Select Language');
    const navigation = useNavigation<Props["navigation"]>();
    const { t } = useTranslation();

    // Update selected language display based on current i18n language
    useEffect(() => {
        let language = '';
        switch (i18n.language) {
            case 'en':
                language = 'English';
                break;
            case 'fr':
                language = 'French';
                break;
        }
        setSelectedLanguage(language);
    }, [i18n.language]);

    // Modal control functions
    const openModal = (modal: string) => {
        setModalVisible(modal);
    };

    const selectLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setModalVisible(false);
    };

    return {
        t,
        modalVisible,
        selectedLanguage,
        navigation,
        setModalVisible,
        selectLanguage,
        openModal,
    };
};