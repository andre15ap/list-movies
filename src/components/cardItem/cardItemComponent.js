import React from 'react';

import COLORS from '../../config/colors';

import { Card, ItemText} from './styles';

export default function CardItemComponent({item}){
    return (
        <Card>
            <ItemText size={20} color={COLORS.PRIMARY_DARK}>{item.title}</ItemText>
            <ItemText size={15} color={COLORS.BLACK_LIGHT}>{item.year}</ItemText>
        </Card>
    )
}