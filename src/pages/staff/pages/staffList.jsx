import React from 'react'
import {Card, Button, Table, Switch, Divider, Modal, message, notification} from 'antd'
import {getStaffList, setFocusStaff, deleteStaff} from "../../../api/staffApi";
import config from "../../../config/config";

export default class StaffList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            staffList: [],
            totalSize: 0,
            pageSize: 4
        }
    }

    componentDidMount() {
        // 加载列表数据
        this._loadData();
    }

    _loadData = (page_num = 1, page_size = 4) => {
        getStaffList(page_num, page_size).then((result) => {
            if (result && result.status === 1) {
                message.success(result.msg);
                this.setState({
                    totalSize: result.data.staff_count,
                    staffList: result.data.staff_list
                })
            }
        }).catch(() => {
            message.error('获取资源列表失败!');
        })
    };

    // 列的配置信息
    columns = [
        {
            title: 'Staff ID',
            width: 100,
            dataIndex: 'staff_id',
            key:'staff_id'
        },
        {
            title: 'Profile',
            width: 50,
            dataIndex: 'profile',
            render: (text, record) => {
                return (
                    <img src={config.BASE_URL + record.staff_img} alt="profile" width={50}/>
                )
            }
        },
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
        },
        {
            title: 'Position',
            width: 100,
            dataIndex: 'position',
        },
        {
            title: 'Phone',
            width: 100,
            dataIndex: 'phone',
        },
        {
            title: 'Email',
            width: 150,
            dataIndex: 'email',
        },
        {
            title: 'Purchase Quantity',
            dataIndex: 'purchase_quantity',
            key: 'purchase_quantity',
            width: 100,
        },
        {
            title: 'Purchase Cost',
            dataIndex: 'purchase_cost',
            key: 'purchase_cost',
            width: 100,
        },
        {
            title: 'Sale Quantity',
            dataIndex: 'sale_quantity',
            key: 'sale_quantity',
            width: 100,
        },
        {
            title: 'Sale Value',
            dataIndex: 'sale_value',
            key: 'sale_value',
            width: 100,
        },
        {
            title: 'Action',
            width: 100,
            render: (text, record) => {
                return (
                    <div>
                        <Button onClick={() => {
                            this.props.history.push({
                                pathname: '/staff/staff-edit',
                                state: {
                                    staff: record
                                }
                            });
                        }}>Edit</Button>
                        <Divider type="vertical"/>
                        <Button onClick={() => {
                            Modal.confirm({
                                title: '确认删除吗?',
                                content: '删除此资源,所有关联的内容都会被删除',
                                okText: '确认',
                                cancelText: '取消',
                                onOk: () => {
                                    deleteStaff(record.id).then(result => {
                                        if (result && result.status === 1) {
                                            message.success(result.msg);
                                            this._loadData();
                                        } else {
                                            message.error('删除失败!');
                                        }
                                    }).catch(() => {
                                        message.error('删除失败!');
                                    })
                                }
                            });
                        }}>Fire</Button>
                    </div>
                )
            }
        },
    ];

    render() {
        // 添加按钮
        let addBtn = (
            <Button type={"primary"} onClick={() => {
                this.props.history.push('/staff/staff-add');
            }}>
                Add New Staff Member
            </Button>
        );

        return (
            <Card title={"Staff List"} extra={addBtn}>
                <Table
                    columns={this.columns}
                    dataSource={this.state.staffList}
                    rowKey={"id"}
                    pagination={{
                        total: this.state.totalSize,
                        pageSize: this.state.pageSize,
                        onChange: (pageNum, pageSize) => {
                            console.log('需要加载' + pageNum, pageSize);
                            this._loadData(pageNum, pageSize)
                        }
                    }}
                />
            </Card>
        )
    }
}