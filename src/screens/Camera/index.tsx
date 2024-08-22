import React, { useRef, useState } from 'react';
import { Button, Text, View, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { styles } from './styles'; 
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../../styles/colors'; 
import { ComponentLoading } from '../../components';

export function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
  const ref = useRef<CameraView>(null);
  const [photo, setPhoto] = useState<CameraCapturedPicture>;

  if (!permission) {
    return <ComponentLoading />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Você precisa dar permissão para acesso à Câmera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  async function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync({ imageType: 'jpg', quality: 0});
      setPhoto(picture);
    }
  }

  async function savePhoto() {
    if (permissionMedia.status !== 'granted') {
      await requestPermissionMedia();
    }
    if (permissionMedia.status === 'granted' && photo) {
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      await MediaLibrary.createAlbumAsync('Images', asset, false);
      Alert.alert('Imagem salva com sucesso!');
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        type={facing}
        ref={ref}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={toggleCameraFacing} title="Flip Camera" />
        <Button onPress={takePicture} title="Take Picture" />
        {photo && <Button onPress={savePhoto} title="Save Picture" />}
      </View>
    </View>
  );
}
