package com.luv2code.cinema.Dtos;

import com.luv2code.cinema.entity.Film;
import com.luv2code.cinema.entity.Time;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class TimeDto {
    private Long id;
    private String time;

    public static Time toEntity(TimeDto timeDto){
        Time time = new Time();
        time.setId(timeDto.getId());
        time.setTime(timeDto.getTime());
        return time;
    }
    public static TimeDto fromEntity(Time time) {
        return TimeDto.builder()
                .id(time.getId())
                .time(time.getTime())
                .build();
    }
}
