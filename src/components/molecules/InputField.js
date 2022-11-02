import {AntDesign} from '@expo/vector-icons';
import React, { useCallback } from 'react';
import {StyleSheet, Text, View, TextInput, useWindowDimensions} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Animated, interpolate} from 'react-native-reanimated';

const WIDTH = 50;

export const InputField = memo (() => {
    const [isOpened, setIsOpened] = useState(false);
    const animation = useSharedValue(WIDTH);
    const width = useWindowDimensions().width;

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: animation.value,
            borderRadius: interpolate(animation.value, [WIDTH, width], [30, 0]),
        };
    });

    const onPress= useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);

    useEffect(() => {
        const value = isOpened ? 100 : WIDTH;
        animation.value = withTiming(value);

        if (isOpened) {
            inputRef.current?.focus();
        } else {
            inputRef.current?.blur();
        }

    }, [isOpened]);

    return (
        <Animated.View style={[styles.container, animatedStyles]}>
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={styles.containerClose}>
                    <AntDesign name = "search1" size = {24} color = "black" />
                </View>
            </TouchableWithoutFeedback>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    placeholderTextColor="#000"
                    onChangeText={onChangeText}
                    value={value}
                />
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        width: width,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },

    containerClose: {
        width:width,
        height:50,
        borderRadius:25,
        borderWidth:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
        borderWidth:1, 
    }
});
