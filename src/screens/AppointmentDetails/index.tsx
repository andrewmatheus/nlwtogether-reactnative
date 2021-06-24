import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { 
  ImageBackground, 
  View, 
  Text,
  FlatList 
} from 'react-native';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { Member } from '../../components/Member';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png';

import { styles } from './styles';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Andrew',
      avatar_url: 'https://github.com/andrewmatheus.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Andrew',
      avatar_url: 'https://github.com/andrewmatheus.png',
      status: 'offline',
    },
  ];


  return(
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      
      <ImageBackground 
        style={styles.banner}
        source={BannerImg}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>
          
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      
      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList 
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />      
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>    
    </Background>
  )
}