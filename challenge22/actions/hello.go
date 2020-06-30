package actions

import (
	"net/http"

	"github.com/gobuffalo/buffalo"
)

// a home page.
func HelloFullCycleHandler(c buffalo.Context) error {
	return c.Render(http.StatusOK, r.HTML("hello.html"))
}
