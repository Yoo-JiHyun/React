package com.aloha.products.domain;

import java.util.Date;

import lombok.Data;

@Data
public class Product {
    private int no;
    private String id;
    private String title;
    private String content;
    private int likeCount;
    private String img;
    private Date createdAt;
    private Date updatedAt;
}