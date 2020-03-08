import React from 'react';
import { Icon } from 'native-base';

import COLORS from '../../config/colors';

import { ButtonToTop } from './styles';

export default function ButtonToTopComponent({scroll}){
    return (
        <ButtonToTop
            color={COLORS.BUTTOM_UP} 
            onPress={() => scroll.current.scrollTo({x:0,y:0, animated: true})} >
            <Icon 
                style={{color:COLORS.WHITE, fontSize: 20 }} 
                type="MaterialIcons" 
                name="arrow-upward" />
        </ButtonToTop>
    )
}