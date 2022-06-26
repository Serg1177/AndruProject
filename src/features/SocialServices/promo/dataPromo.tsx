import React, { useState } from 'react';

import {
    SearchOutlined, MoreOutlined, PlusOutlined, ControlOutlined,
    ArrowLeftOutlined, ArrowRightOutlined
} from '@ant-design/icons';
import {
    Col, Image, Row, Typography, Table,
    Divider, Radio, Select, Button, Input, Space,
    DatePicker, AutoComplete, DatePickerProps
} from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import moment from 'moment';
import styled from 'styled-components';

interface DataType {
    key: React.Key;
    all: boolean;
    name: string;
    id: number;
    today: number;
    week: number;
    total: number

}

export const arm: DataType[] = [

    {
        key: '1',
        all: false,
        id: 1,
        name: 'Карла Маркса',
        today: 920,
        week: 12000,
        total: 330120
    },
    {
        key: '2',
        all: false,
        id: 2,
        name: 'Красная Площадь',
        today: 517,
        week: 4900,
        total: 220897
    },
    {
        key: '3',
        all: false,
        id: 3,
        name: 'Село Зюзино',
        today: 13,
        week: 360,
        total: 4895
    },

];



export const columns: ColumnsType<DataType> = [
    {
        title: 'Все',
        dataIndex: 'all',
        key: 'id',

    },
    {
        title: '№',
        dataIndex: 'id',
        key: 'name',
        sorter: (a, b) => a.id - b.id

    },
    {
        title: 'Название запроса',
        dataIndex: 'name',
        key: 'description',
        sorter: (a, b) => a.id - b.id,
        render: text => <a>{text}</a>

    },
    {
        title: 'Сегодня',
        dataIndex: 'today',
        key: 'type',
        sorter: (a, b) => a.id - b.id,
        render: (text) => diagramaGoriz(text)
    },
    {
        title: 'Неделя',
        dataIndex: 'week',
        key: 'image',
        sorter: (a, b) => a.id - b.id,
        render: (text) => diagramaGrafik()
    },
    {
        title: 'Всего',
        dataIndex: 'total',
        key: 'image',
        sorter: (a, b) => a.id - b.id,
        render: (text) => diagramaGoriz(text)
    },
];


const diagramaGoriz = (text = null) => <><Row><Col>{text}</Col></Row>
    <Row><Col><Image src={require('~/features/SocialServices/organisms/img/table/RectangleR.jpg')}
        width={20} height={3} />
        <Image src={require('~/features/SocialServices/organisms/img/table/RectangleW.jpg')} width={20} height={3} />
        <Image src={require('~/features/SocialServices/organisms/img/table/Rectangle.png')} width={20} height={3} />
    </Col></Row></>;

const diagramaGrafik = (text = null) => <><Row><Col><Image
    src={require('~/features/SocialServices/organisms/img/table/row24.jpg')}
    width='80%' preview={false} />
</Col></Row></>;
