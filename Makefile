CYAN := \033[36m
NC := \033[0m

.PHONY: backend-install
backend-install: ## Install backend dependencies
	@ $(MAKE) --no-print-directory log-$@
	@ cd backend; npm ci install

.PHONY: backend-run
backend-run: ## Run backend
	@ $(MAKE) --no-print-directory log-$@
	@ cd backend; npm run start

################################################################################
## Self-Documenting Makefile Help                                             ##
## https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html         ##
################################################################################
.DEFAULT_GOAL := help

.PHONY: help
help:
	@ grep -h -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "$(CYAN)%-20s$(NC) %s\n", $$1, $$2}'

log-%:
	@ grep -h -E '^$*:.*?## .*$$' $(MAKEFILE_LIST) | \
	  awk 'BEGIN {FS = ":.*?## "}; {printf "$(CYAN)%s$(NC)\n", $$2}'
