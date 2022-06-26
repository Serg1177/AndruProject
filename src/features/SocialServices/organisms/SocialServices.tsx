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

import './diagrams.css';
import { arm, columns } from '../promo/dataPromo';




interface DataType {
    key: React.Key;
    all: boolean;
    name: string;
    id: number;
    today: number;
    week: number;
    total: number

}

const StyledAutoComplete = styled(AutoComplete)`
  &&& {
    width: 100%;
    & > div {
      border: none;
      background-color: transparent;
    }
  }
`;

const StyledSelect = styled(Select)`
  &&& {
    width: 100%;
    & > div {
      border: none;
      background-color: transparent;
    }
  }
`;

const StyledContainerRow = styled(Row)`
  height: 100%;
`;

const StyledInputRow = styled(Row)`
  border: ${(props) => `1px solid ${props.theme.palette.borders.default}`};
  border-radius: ${(props) => props.theme.spacing(0.5)};
  box-sizing: border-box;
  height: ${(props) => props.theme.spacing(5)};
`;

const StyledButton = styled(Button)`
type:"dashed";
backgroundColor: 'white';
  border-radius: ${(props) => props.theme.spacing(0.5)};
  padding-left: ${(props) => props.theme.spacing(3.5)};
  padding-right: ${(props) => props.theme.spacing(3.5)};
`;

const { Search } = Input;


const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: DataType) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const dataSourse = arm.map(item => ({ ...item, key: item.id }));


const { Title, Text } = Typography;

// todo thake color from global theme
const StyledTitle = styled.h2`
  margin: 1;
  font-weight: 640;
  font-size: 2.7rem;
  line-height: 2.7rem;
  border-left-style: solid;
  border-color: #20a4f3;
  color: white;
  border-width: 4px;
  padding-left: 1rem;
`;

interface IProps {
    setUser: (user: boolean) => void;
}

export const SocialServices: React.FC<IProps> = ({ setUser }: IProps) => {
    const [isUpdate, setUpdate] = useState(false);

    const handleSignIn = () => {
        setUser(true);
    };

    const hanldeRestoreClick = () => {
        setUpdate(true);
    };

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');



    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    //     const customFormat: DatePickerProps['format'] = value =>
    //   `custom format: ${value.format(dateFormat)}`;


    return (

        <div style={{ paddingTop: 30, paddingLeft: 30 }}>

            <Row >
                <Col xs={21} sm={21} md={21} lg={21} xl={24} xxl={21}>
                    <Row gutter={16}>
                        <Col >
                            <StyledSelect defaultValue='Сводный отчет' size='large'
                                style={{ backgroundColor: '#CCCCCC', height: '80%', paddingRight: '20' }}>
                                <Select.Option value='Выборка'>Копировать</Select.Option>
                                <Select.Option value='Индивидуально'>Сортировать</Select.Option>
                            </StyledSelect>
                        </Col>
                        <Col xs={13} sm={13} md={13} lg={13} xl={13} xxl={13} >
                            <AutoComplete style={{ borderColor: 'gray', alignContent: 'center', width: '100%' }}
                                placeholder='Введите запрос в это поле...'
                            />
                        </Col>

                        <Col>
                            <Space style={{ border: '1px solid #CCCCCC', padding: 3, height: '80%' }} >
                                <ControlOutlined />
                                <Input style={{ border: 'white' }} placeholder='Фильтр'></Input>
                            </Space>
                        </Col>
                        <Col>
                            <Button type='primary' icon={<SearchOutlined />}>
                                Искать
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row style={{ marginBottom: 10 }}>
                <Col xs={21} sm={21} md={21} lg={21} xl={24} xxl={21}>
                    <Row>
                        <Col>
                            <Button type='link'>Все запросы</Button>
                            <Button type='link' style={{ color: 'gray' }}>Архив запросов</Button>
                            <PlusOutlined />
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}></Col>
                        <Col>

                            <Space direction='vertical' size={12}>

                                <RangePicker
                                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                                    format={dateFormat}
                                />
                                {/* <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={customFormat} /> */}
                            </Space>

                        </Col></Row>
                </Col>
            </Row>

            <Divider />
            <Row style={{ marginBottom: 10 }}>
                <Col xs={21} sm={21} md={21} lg={21} xl={22} xxl={21}>
                    <StyledContainerRow
                        gutter={{ xs: 8, sm: 8, md: 8, lg: 16, xl: 16, xxl: 16, }}>
                        <StyledInputRow>
                            <Col >
                                <StyledSelect defaultValue='Выберите действие' size='large' >
                                    <Select.Option value='Копировать'>Копировать</Select.Option>
                                    <Select.Option value='Сортировать'>Сортировать</Select.Option>
                                </StyledSelect>
                            </Col>

                        </StyledInputRow>
                        <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} style={{ backgroundColor: 'white' }} >
                            <StyledButton size='large'>{'OK'}</StyledButton>
                        </Col>
                        <Col xs={10} sm={10} md={10} lg={12} xl={8} xxl={10}>

                        </Col>
                        <Col>
                            <StyledSelect defaultValue='Сначала новые' size='large'>
                                <Select.Option value='Сначала популярные'>Сначала популярные</Select.Option>
                                <Select.Option value='Сначала старые'>Сначала старые</Select.Option>
                            </StyledSelect>
                        </Col>
                        <Col>
                            <Space style={{ border: '1px solid black', paddingLeft: 10 }}>
                                <SearchOutlined />
                                <Input style={{ border: '1px solid white' }}
                                    placeholder='поиск запроса'

                                >

                                </Input>
                            </Space>
                        </Col>
                    </StyledContainerRow>
                </Col>
                <Col >
                    <a href='' style={{ position: 'absolute', marginTop: 10 }}><MoreOutlined /></a>
                </Col>
            </Row>

            <Row >
                <Col xs={21} sm={21} md={21} lg={21} xl={22} xxl={21}>
                    <Table rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                        dataSource={dataSourse}
                        columns={columns}
                        pagination={false}            
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
                <Col>Запросов на странице
                    <Select defaultValue='10' style={{ paddingLeft: 10 }}>
                        <Select.Option value='20'>20</Select.Option>
                        <Select.Option value='30'>30</Select.Option>
                    </Select>
                </Col>
                <Col style={{ paddingLeft: 10, paddingRight: 10, paddingTop: 5 }}>
                    К номеру
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                    <Input placeholder='1' ></Input>
                </Col>
                <Col xs={10} sm={10} md={10} lg={10} xl={10} xxl={10}>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}><ArrowLeftOutlined /><a>Назад</a></Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2} style={{ marginRight: 40 }}>
                    <Input placeholder='10-20 из 44'></Input></Col>
                <Col xs={2} sm={2} md={2} lg={2} xl={2} xxl={2}><a>Вперед</a><ArrowRightOutlined /></Col>

            </Row>

        </div>

    );
};

