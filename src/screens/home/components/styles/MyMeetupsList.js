import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '$blackBlueColor',
  },
  titleContainer: {
    flex: 0.1,
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  contentContainer: {
    flex: 1,
  },
  meetupCard: {
    height: 100,
    flex: 1,
    marginVertical: '1.5%',
    backgroundColor: '$redColor',
  },
  meetupCardTopContainer: {
    flex: 1,
    position: 'relative',
  },
  meetupCardTitle: {
    position: 'absolute',
    color: 'white',
    top: '2%',
    left: '2.5%',
  },
  meetupCardBottomContainer: {
    flex: 0.6,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: '2.5%',
  },
  meetupCardMetaName: {
    fontSize: 15,
  },
  meetupCardMetaDate: {
    fontSize: 13,
  },
});

export default styles;
