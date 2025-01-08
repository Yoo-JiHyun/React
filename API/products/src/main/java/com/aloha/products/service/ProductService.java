package com.aloha.products.service;

import java.util.List;

import com.aloha.products.domain.Product;

public interface ProductService {
    
    // 목록
    public List<Product> list() throws Exception;
    // 조회
    public Product select(String id) throws Exception;
    // 등록
    public int insert(Product product) throws Exception;
    // 수정
    public int update(Product product) throws Exception;
    // 삭제
    public int delete(String id) throws Exception;
}
