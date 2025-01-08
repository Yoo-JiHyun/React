package com.aloha.todo.mapper;

import java.util.List;

public interface BaseMapper<E> {
    public List<E> list();
    public E select(Long no);
    public E selectById(String id);
    public boolean insert(E entity);
    public boolean update(E entity);
    public boolean updateById(E entity);
    public boolean delete(E entity);
    public boolean deleteById(E entity);
}
