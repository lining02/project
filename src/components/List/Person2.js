import { Table,  Menu, Dropdown, Icon } from 'antd';
import { gender } from '../../utils/filters'
import { Link } from 'react-router-dom';
import Query from './Query2';
    const columns = [{
        "title":"id","dataIndex":"id","key":"id", width: 80, fixed: 'left', align: 'center'
    },{
        "title":"nickName","dataIndex":"nickName","key":"nickName", width: 100, align: 'center'
    },{
        "title":"age","dataIndex":"age","key":"age", width: 100, align: 'center'
    },{
        "title":"状态","dataIndex":"status","key":"status", width: 100, align: 'center'
    },{
        "title":"address","dataIndex":"address","key":"address", width: 200, align: 'center'
    },{
        "title":"createTime","dataIndex":"createTime","key":"createTime", width: 200, align: 'center'
    },{
        "title":"isMale","dataIndex":"isMale","key":"isMale", width: 100, align: 'center', 
        render: (value, row, index) => {
            return (<span>{gender(value)}</span>)
        }
    },{
        "title":"name","dataIndex":"name","key":"name", width: 100, align: 'center'
    },{
        "title":"idNo","dataIndex":"idNo","key":"idNo", width: 100, align: 'center'
    },{
        "title":"emile","dataIndex":"emile","key":"emile", width: 180, align: 'center'
    },{
        "title":"tel","dataIndex":"tel","key":"tel", width: 100, align: 'center'
    },{
        "title":"color","dataIndex":"color","key":"color", width: 100, align: 'center',
        render: (value, row, index) => {
            return (<span style={{color: value}}>{value}</span>)
        }
    },{
        "title":"avatar","dataIndex":"avatar","key":"avatar", width: 100, align: 'center',
        render: (value, row, index) => {
            return (<img src={value}/>)
        }
    }, {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => (
            <Dropdown overlay={menu}>
                <div>
                操作 <Icon type="down" />
                </div>
            </Dropdown>
        ),
    },]

  const menu = (
    <Menu>
      <Menu.Item>
      <Link to={'login'}> 详情</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to={'login'}> 编辑</Link>
      </Menu.Item>
      <Menu.Item>
      <Link to={'login'}> 删除</Link>
      </Menu.Item>
    </Menu>
  );


const Person = ({ dataSource, statusList, updateConfig, queryConfig2 }) => {
    const queryProps = {
        updateConfig,
        queryConfig2
    }
    return (
        <div>
            <Query {...queryProps}/>
            <Table dataSource={dataSource} columns={columns} rowKey={(record,index)=> index} scroll={{ x: 1300 }}  />
        </div>
    )
}
export default Person;