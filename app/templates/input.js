import React from 'react';
import {StyleSheet, View } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default inputTempleate = locals => {
  return (
    <View style={styles.view}>
      <Input
        placeholder={locals.config.placeholder}
        password={locals.config.password}
        secureTextEntry={locals.config.secureTextEntry}
        rightIcon={
          <Icon type={locals.config.iconType} 
                name={locals.config.iconName} 
                size={24}
                color="#b3b3b3"/>
        }
        leftIconContainerStyle={styles.iconContainer}
        onChangeText={v => locals.onChange(v)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        marginTop: 12,
        marginBottom: 12
    },
    iconContainer: {
        paddingRight: 15,
    }    
});
