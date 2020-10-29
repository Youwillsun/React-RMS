import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Popconfirm } from 'antd';
import { listApi, delOne, modifyOne } from '../../../services/product';
import './List.css';

function List(props) {

    const [dataSource, setDataSource] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // 组件初始化 副作用
    useEffect(() => {
        listApi().then(res => {
            console.log(res);
            setDataSource(res.products);
            setTotal(res.totalCount);
        })
    }, []);

    // 分页加载数据
    const loadData = (page) => {
        console.log('page: ', page);
        listApi(page).then(res => {
            console.log(res);
            setDataSource(res.products);
            setTotal(res.totalCount);
            setCurrentPage(page);
        })
    }

    const columns = [
        {
            title: '序号',
            key: '_id',
            width: 80,
            align: 'center',
            render: (txt, row, index) => index + 1
        },
        {
            title: '名字',
            dataIndex: 'name'
        },
        {
            title: '价格',
            dataIndex: 'price'
        },
        {
            title: '是否在售',
            dataIndex: 'onSale',
            render: (txt, record) => (record.onSale ? "在售" : "已下架")
        },
        {
            title: '操作',
            render: (txt, record, index) => {
                return (<div>
                    <Button type="primary" size="small" onClick={() => {
                        // 跳转到修改页面，传递id
                        props.history.push(`/admin/products/edit/${record._id}`)
                    }}>修改</Button>
                    <Popconfirm
                        title="确定删除此项？"
                        onCancel={() => console.log('用户取消删除')}
                        onConfirm={() => {
                            console.log('用户确认删除');
                            // 删除数据
                            delOne(record._id).then(res => {
                                console.log(res);
                                // 加载当前页数据
                                loadData(currentPage);
                            }).catch(err => {
                                console.log(err);
                            })
                        }}>
                        <Button type="danger" size="small" style={{ marginLeft: '1rem' }}>删除</Button>
                    </Popconfirm>
                    <Button size="small" onClick={() => {
                        modifyOne(record._id, { onSale: !record.onSale }).then(res => {
                            console.log(res);
                            // 加载当前页数据
                            loadData(currentPage)
                        }).catch(err => {
                            console.log(err);
                        })
                    }}>{record.onSale ? "下架" : "上架"}</Button>
                </div>)
            }
        }
    ]
    return (
        <div>
            <Card
                title="商品列表"
                extra={
                    <Button type="primary" size="small" onClick={() => props.history.push("/admin/products/edit")}>
                        新增
                    </Button>
                }>
                <Table
                    rowKey="id"
                    rowClassName={record => record.onSale ? "" : "bg-red"}
                    pagination={{ total, defaultPageSize: 2, onChange: loadData }}
                    columns={columns}
                    bordered
                    dataSource={dataSource}
                />
            </Card>
        </div>
    )
}

export default List
