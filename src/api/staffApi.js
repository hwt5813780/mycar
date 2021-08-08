import ajax from './index'

// 1. 获取所属分类
export const getStaff = () => ajax('/api/auth/staff/staff');

// 6. 添加
export const addStaff = (token, staff_name, staff_author, staff_publish_time, staff_content, staff_category_id, staff_classes_id, staff_area_id, staff_meta_id, staff_format_id, staff_img, staff_price, focus_img) => ajax('/api/auth/staff/add', {
    token,
    staff_name,
    staff_author,
    staff_publish_time,
    staff_content,
    staff_category_id,
    staff_classes_id,
    staff_area_id,
    staff_meta_id,
    staff_format_id,
    staff_img,
    staff_price,
    focus_img
}, 'post');

// 7. 获取资源列表
export const getStaffList = (page_num, page_size) => ajax('/api/auth/staff/list', {page_num, page_size});

// 8. 设置是否轮播图
export const setFocusStaff = (id, is_focus) => ajax('/api/auth/staff/set_focus_staff', {id, is_focus});

// 9. 删除一个资源
export const deleteStaff = (id) => ajax('/api/auth/staff/delete_staff', {id});

// 10. 修改一条活动
export const editStaff = (token, staff_id, staff_name, staff_author, staff_publish_time, staff_content, staff_category_id, staff_classes_id, staff_area_id, staff_meta_id, staff_format_id, staff_img, staff_price, focus_img, staff_content_tag) => ajax('/api/auth/staff/edit', {
    token,
    staff_id,
    staff_name,
    staff_author,
    staff_publish_time,
    staff_content,
    staff_category_id,
    staff_classes_id,
    staff_area_id,
    staff_meta_id,
    staff_format_id,
    staff_img,
    staff_price,
    focus_img,
    staff_content_tag
}, 'post');

// 11. 获取上传的文件
export const getFileList = (tag) => ajax('/api/auth/staff/file_list', {tag});
