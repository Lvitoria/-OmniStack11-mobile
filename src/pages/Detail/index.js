import React from 'react'
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import logoImg from '../../assets/logo.png'
import styles from './style'
// como ele não tem uma export default ele exporta varias funções,
// assim eu pego todos as funcões e passo pro mailComposer
import * as mailComposer from 'expo-mail-composer'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  const incident = route.params.incident
  const message = `olá ${incident.name}, estou entrando em contato, poi gostaria de ajudar no caso ${incident.title}`
  function navigationBack() {

    navigation.goBack()
  }
  // enviando email
  function sendEmail() {
    mailComposer.composeAsync({
      subject: `Herói do caso:${incident.title}`,
      // recipients: ['lucasvitoriaalves@hotmail.com'],
      recipients: [incident.email],
      body: message
    })
  }
  //enviar mensagem whats
  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]} >ONG:</Text>
        <Text style={styles.incidentValue} >{incident.name} de {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty} >CASO:</Text>
        <Text style={styles.incidentValue} >{incident.title}</Text>

        <Text style={styles.incidentProperty} >VALOR:</Text>
        <Text style={styles.incidentValue} >
          {Intl.NumberFormat('pt-BR',
            {
              style: 'currency',
              currency: 'BRL'
            }).format(incident.value)}
        </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói dese caso.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}