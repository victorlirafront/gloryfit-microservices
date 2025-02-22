package models

import "time"

type User struct {
	ID             int       `gorm:"primaryKey"`
	Username       string    `gorm:"unique;not null"`
	HashedPassword string    `gorm:"not null"`
	Role           string    `gorm:"type:varchar(20);not null;default:'regular'"`
	SessionToken   string    `gorm:"default:null"`
	CSRFToken      string    `gorm:"default:null"`
	CreatedAt      time.Time `gorm:"default:CURRENT_TIMESTAMP"`
	UpdatedAt      time.Time `gorm:"default:CURRENT_TIMESTAMP"`
}
