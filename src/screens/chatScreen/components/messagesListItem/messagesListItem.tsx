import React from "react";
import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import styles from './messagesListItem.style';
import { Icons } from "../../../../assets/icons";
import { useTranslation } from "react-i18next";

interface IMessage {
    question?: string;
    answer?: string;
}

interface IProps {
    item: IMessage;
    copyToClipboard: (text: string) => void;
}

const MessagesListItem: React.FC<IProps> = ({ item, copyToClipboard }) => {
    const { t } = useTranslation();

    // Define container style with proper type
    const containerStyle: ViewStyle = {
        justifyContent: item?.question ? "flex-end" : "flex-start"
    };

    return (
        <View style={[styles.container, containerStyle]}>
            <View>
                <View style={[
                    styles.cloud, 
                    item?.answer ? styles.cloudFromMe : null
                ]}>
                    {item?.answer && <Icons.Gpt />}
                    <Text style={styles.cloudText}>
                        {item?.question ?? item?.answer}
                    </Text>
                </View>

                {item?.answer && (
                    <View style={[
                        styles.bottomContainer,
                        containerStyle
                    ]}>
                        <View style={styles.rowContainer}>
                            <Icons.Like />
                            <Icons.DisLike />
                        </View>

                        <TouchableOpacity 
                            onPress={() => copyToClipboard(item?.answer!)} 
                            style={styles.rowContainer}
                        >
                            <Icons.Copy />
                            <Text style={styles.cloudText}>{t('copy')}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

export default MessagesListItem;