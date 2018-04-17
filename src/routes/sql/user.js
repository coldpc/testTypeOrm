module.exports = {
    saveLogId: `
        INSERT INTO sys_login_log 
        (user_id, login_ip, login_date, create_date, create_by, last_updated_by, last_updated_date)
        VALUES (:userId, :ip, :date, :date, :userId, :userId, :date)
    `
};