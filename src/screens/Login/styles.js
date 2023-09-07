import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 62,
    paddingHorizontal: 3,
  },
  box: {
    width: '90%',
    maxWidth: 400,
  },
  heading: {
    marginTop: 20,
    textAlign: 'center',
    color: Colors.base.title,
    fontWeight: 'medium',
    fontSize: 16,
  },
});



