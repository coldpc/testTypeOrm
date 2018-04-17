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
export class SysUsers {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({
        nullable: true,
        default: null,
        name: "realname"
    })
    realName: string;

    @Column({
        type: "tinyint"
    })
    gender: number;

    @Column()
    username: string;

    // `password` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column()
    password: string;


    // `idcard` varchar(18) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column()
    idcard: string;

    // `tel` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column()
    tel: string;

    // `qq` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column()
    qq: string;

    // `email` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column()
    email: string;

    // `address` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column()
    address: string;

    // `balance` decimal(9,2) NOT NULL DEFAULT '0.00',
    @Column()
    balance: string;

    // `stock` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "decimal",
        default: 0.00
    })
    stock: number;


    // `stock_60` decimal(9,2) NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00
    })
    stock_60: number;


    // `stock_25` decimal(9,2) NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00
    })
    stock_25: number;

    // `stock_15` decimal(9,2) NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00
    })
    stock_15: number;

    // `score` decimal(9,2) NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00
    })
    score: number;

    // `bonus_coin` decimal(9,2) unsigned NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00,
        name: "bonus_coin"
    })
    bonusCoin: number;

    // `stock_coin` decimal(9,2) unsigned NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00,
        name: "stock_coin"
    })
    stockCoin: number;

    // `consume_coin` decimal(9,2) unsigned NOT NULL DEFAULT '0.00',
    @Column({
        type: "decimal",
        default: 0.00,
        name: "consume_coin"
    })
    consumeCoin: number;

    // `bank_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column({
        name: "bank_name"
    })
    bankName: string;

    // `bank_realname` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column({
        name: "bank_realname"
    })
    bankRealName: string;

    // `bank_accounts` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column({
        name: "bank_accounts"
    })
    bankAccounts: string;

    // `marketrole` varchar(16) COLLATE utf8_unicode_ci DEFAULT '零售商',
    @Column({
        default: '0'
    })
    marketrole: string;

    // `user_level` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "int",
        length: 12,
        default: 0,
        name: "user_level"
    })
    userLevel: number;

    // `rec_id` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "int",
        length: 12,
        default: 0,
        name: "rec_id"
    })
    recId: number;

    // `parent_id` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "int",
        length: 12,
        default: 0,
        name: "parent_id"
    })
    parentId: number;

    // `service_id` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "int",
        length: 12,
        default: 0,
        name: "service_id"
    })
    serviceId: number;

    // `log_time` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "int",
        length: 12,
        default: 0,
        name: "log_time"
    })
    logTime: number;

    // `log_ip` varchar(32) COLLATE utf8_unicode_ci DEFAULT NULL,
    @Column({
        name: "log_ip"
    })
    logIp: string;

    // `reg_time` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "int",
        length: 12,
        default: 0,
        name: "reg_time"
    })
    regTime: number;

    // `is_register` tinyint(1) NOT NULL DEFAULT '0',
    @Column({
        type: "tinyint",
        default: 0,
        name: "is_register"
    })
    isRegister: number;

    // `is_service` tinyint(1) NOT NULL DEFAULT '0',
    @Column({
        type: "tinyint",
        default: 0,
        name: "is_service"
    })
    isService: number;

    // `status` tinyint(1) NOT NULL DEFAULT '0',
    @Column({
        type: "tinyint",
        default: 0
    })
    status: number;

    // `pos` int(11) NOT NULL DEFAULT '999999',
    @Column({
        type: "tinyint",
        default: 0
    })
    pos: number;

    // `edition` int(11) NOT NULL DEFAULT '0',
    @Column({
        type: "tinyint",
        default: 0
    })
    edition: number;
}
