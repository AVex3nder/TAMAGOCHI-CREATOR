import React, {useState} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import ListItem from './listItem';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListMaker = ({listArray, handler, paths}) => {
  const [selected, setSelected] = useState(null); // this state is unique for this component

  return (
    <ScrollView
      horizontal={true}
      persistentScrollbar={true}
      snapToOffsets={[260]}
      decelerationRate={'fast'}
      style={styles.scroll}>
      {listArray.length &&
        listArray.map(item => {
          return (
            <ListItem
              handler={handler}
              paths={paths}
              item={item}
              selected={selected}
              setSelected={setSelected}
              key={item}
            />
          );
        })}
      <View style={styles.view}>
        <TouchableOpacity style={styles.press}>
          <Icon size={40} name={'plus'} color={'#28f2a3'} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.text}>Add your own!</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    overflow: 'scroll',
  },
  view: {
    borderWidth: 2,
    borderRadius: 10,
    width: 250,
    height: 290,
  },
  press: {
    margin: 40,
    height: 170,
    overflow: 'hidden',
    justifyContent: 'center',
    borderColor: '#28f2a3',
    borderRadius: 10,
    borderWidth: 4,
  },
  icon: {
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});

export default ListMaker;
