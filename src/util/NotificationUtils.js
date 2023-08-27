import notifee from '@notifee/react-native';

async function displayNotification(title, text) {
  await notifee.requestPermission();

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: title,
    body: text,
    android: {
      channelId,
      pressAction: {
        id: 'default',
      },
    },
  });
}

export { displayNotification };
