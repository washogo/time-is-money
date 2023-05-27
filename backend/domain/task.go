package domain

import (
	"time"
)

var Task struct {
	ID          int
	title       string
	detail      string
	startDate   time.Time
	endDate     time.Time
	workedTimes int
}
