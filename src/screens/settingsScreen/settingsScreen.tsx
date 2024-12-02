import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import LanguageSelector from '../../components/languageSelector/languageSelector';
import settingsScreenHook from './settingsScreen-hook';
import styles from './settingsScreen.style';
import { Icons } from '../../assets/icons';
import About from '../../components/about/about';

// Main settings screen component
const SettingsScreen: React.FC = () => {
  const {
    t,
    modalVisible,
    selectedLanguage,
    navigation,
    setModalVisible,
    selectLanguage,
    openModal,
  } = settingsScreenHook();

  return (
    // Main container with dark background
    <View style={{ backgroundColor: '#010705', flex: 1 }}>
      {/* Background image */}
      <Image 
        style={{ flex: 1, width: "100%", height: 800, position: "absolute" }} 
        resizeMode="cover" 
        source={require('../../assets/images/background.png')} 
      />

      <View style={styles.container}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons.Back />
          </TouchableOpacity>
          <Text style={styles.title}>{t('settings')}</Text>
        </View>

        {/* Settings menu items */}
        <View style={styles.subContainer}>
          {/* Language selector */}
          <TouchableOpacity onPress={() => openModal('language')}>
            <View style={styles.menuItem}>
              <Text style={styles.title}>{t('language')}</Text>
              <View style={styles.languageContainer}>
                <View style={styles.language}>
                  <Text style={styles.languageText}>{selectedLanguage}</Text>
                </View>
                <Icons.ArrowRight />
              </View>
            </View>
          </TouchableOpacity>

          {/* About section */}
          <TouchableOpacity onPress={() => openModal('about')}>
            <View style={styles.menuItem}>
              <Text style={styles.title}>{t('about')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for language selection and about section */}
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible != false}
        onRequestClose={() => setModalVisible(false)}
      >
        {modalVisible === 'language' ? (
          <LanguageSelector
            selectLanguage={selectLanguage}
            currentLanguage={selectedLanguage}
            setModalVisible={setModalVisible} 
          />
        ) : (
          <About setModalVisible={setModalVisible}/>
        )}
      </Modal>
    </View>
  );
}

export default SettingsScreen;