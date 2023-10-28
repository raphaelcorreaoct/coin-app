import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12
  },
  card: {
    paddingHorizontal: 24,
    paddingVertical:12,
    borderBottomColor: '#bcbcbc',
    borderBottomWidth:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold'
  },

  valueContainer: {
    justifyContent: 'flex-end',
  },
  currency: {
    textAlign: 'right',
    marginBottom:4
  },
  value: {
    textAlign: 'right'
  },
  header:{marginVertical: 24},
  title: {fontSize: 18}
});


export default styles;