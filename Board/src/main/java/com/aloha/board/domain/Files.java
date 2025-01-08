package com.aloha.board.domain;

import java.util.Date;
import java.util.UUID;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class Files {
    
    private Long no;
    private String id;
    private String pTable;
    private Long pNo;
    private String type;
    private String fileName;
    private String originName;
    private String filePath;
    private Long fileSize;
    private Long seq;
    private Date createdAt;
    private Date updatedAt;

    // 파일 데이터
    MultipartFile data;

    public Files() {
        this.id = UUID.randomUUID().toString();
    }
}
