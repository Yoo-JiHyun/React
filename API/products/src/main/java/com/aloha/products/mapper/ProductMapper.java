package com.aloha.products.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.aloha.products.domain.Product;

@Mapper
public interface ProductMapper {
    
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
