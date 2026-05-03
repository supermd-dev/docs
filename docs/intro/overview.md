---
sidebar_position: 1
id: overview
title: "MISA-MD 概览"
sidebar_label: "MISA-MD 概览"
---

## MISA-MD 简介

MISA-MD (原 Crystal MD) 是一款面向大规模并行分子动力学模拟程序。
该程序在神威·太湖之光上，使用EAM势完成了4\*10^12个原子的分子动力学模拟,为迄今为止(2018年)国际报道的最大规模的分子动力学模拟。
Crystal MD 程序在天河二号超级计算机上的模拟获得[2016年度"天河之星"优秀应用奖](http://www.nscc-gz.cn/newsdetail.html?7689)。
2019 年，MISA-MD 在太湖之光超算上完成了 3\*10^13 粒子的模拟 (EAM势)，进一步提高了世界纪录。  
2020 年，MISA-MD 程序获得广州超算的 “天河之星” 优秀应用奖。
2021 年，MISA-MD 程序在第二届“中国开源科学软件创意大赛”中获得二等奖。

## Features
- MISA-MD 程序以规则晶格的BCC结构的金属原子为模拟对象（如Fe原子），支持自定义比例的杂质合金模拟；
- 可大规模并行，面向超算应用架构；
- 支持级联碰撞模拟；
- 支持EAM势；

## 限制
 - 目前，MISA-MD 程序仅支持BCC结构的原子晶格，不支持其他结构，如FCC结构；
 - MISA-MD 主要侧重于金属原子的模拟，不支持生物大分子的模拟；
 - 目前，MISA-MD 目前仅支持EAM势。
