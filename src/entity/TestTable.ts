/**
 `id` int(11) NOT NULL AUTO_INCREMENT,
 `realname` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `gender` tinyint(1) NOT NULL DEFAULT '0',
 `username` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `password` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `idcard` varchar(18) COLLATE utf8_unicode_ci DEFAULT NULL,
 `tel` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
 `qq` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `email` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `address` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
 `balance` decimal(9,2) NOT NULL DEFAULT '0.00',
 `stock` int(11) NOT NULL DEFAULT '0',
 `stock_60` decimal(9,2) NOT NULL DEFAULT '0.00',
 `stock_25` decimal(9,2) NOT NULL DEFAULT '0.00',
 `stock_15` decimal(9,2) NOT NULL DEFAULT '0.00',
 `score` decimal(9,2) NOT NULL DEFAULT '0.00',
 `bonus_coin` decimal(9,2) unsigned NOT NULL DEFAULT '0.00',
 `stock_coin` decimal(9,2) unsigned NOT NULL DEFAULT '0.00',
 `consume_coin` decimal(9,2) unsigned NOT NULL DEFAULT '0.00',
 `bank_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
 `bank_realname` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `bank_accounts` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `marketrole` varchar(16) COLLATE utf8_unicode_ci DEFAULT '零售商',
 `user_level` int(11) NOT NULL DEFAULT '0',
 `rec_id` int(11) NOT NULL DEFAULT '0',
 `parent_id` int(11) NOT NULL DEFAULT '0',
 `service_id` int(11) NOT NULL DEFAULT '0',
 `log_time` int(11) NOT NULL DEFAULT '0',
 `log_ip` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
 `reg_time` int(11) NOT NULL DEFAULT '0',
 `is_register` tinyint(1) NOT NULL DEFAULT '0',
 `is_service` tinyint(1) NOT NULL DEFAULT '0',
 `status` tinyint(1) NOT NULL DEFAULT '0',
 `pos` int(11) NOT NULL DEFAULT '999999',
 `edition` int(11) NOT NULL DEFAULT '0',
 **/

import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TestTable {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    realName: string;

    @Column({
        name: "test_name"
    })
    testName: string;
}
