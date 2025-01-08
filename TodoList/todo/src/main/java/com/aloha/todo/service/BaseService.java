package com.aloha.todo.service;

import java.util.List;

public interface BaseService<E> {
    public List<E> list();
    public E select(Long no);
    public E selectById(String id);
    public boolean insert(E entity);
    public boolean update(E entity);
    public boolean updateById(E entity);
    public boolean delete(E entity);
    public boolean deleteById(E entity);
}
