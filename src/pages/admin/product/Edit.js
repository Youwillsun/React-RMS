import React, { userState, useEffect } from 'react';
import { Form, Card, Input, Button } from 'antd';
import { createApi, getOneById, modifyOne } from '../../../services/product';

function Edit(props) {
    console.log(props);
    // props.match.params.id 存在的话表示修改，否则新增
    const [currentData, setCurrentData] = userState([]);

    // 初始化执行
    useEffect(() => {
        if (props.match.params.id) {
            getOneById(props.match.params.id).then(res => {
                console.log('res: ', res);
                setCurrentData(res);
            })
        }
    }, [props.match.params.id, setCurrentData]);

    const onFinish = (values) => {
        // 如果是修改
        if (props.match.params.id) {
            modifyOne(props.match.params.id, values).then(res => {
                console.log(res);
                props.history.push('/admin/products')
            }).catch(err => {
                console.log(err)
            })
        } else {
            // 新增数据
            createApi(values).then(res => {
                console.log(res);
                // 返回到商品页
                props.history.push('/admin/products');
            }).catch(err => {
                console.log(err);
            })
        }
    };

    return (
        <div>
            <Card title="商品编辑">
                <Form onFinish={onFinish}>
                    <Form.Item label="名字" name="name" rules={[{ required: true, message: "商品名称不能为空" }]} initialValue={currentData.name}>
                        <Input placeholder="请输入商品名字" />
                    </Form.Item>
                    <Form.Item label="价格" name="price" rules={[{ required: true, message: "商品价格不能为空" }]} initialValue={currentData.price}>
                        <Input placeholder="请输入商品价格" />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">保存</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Edit;
