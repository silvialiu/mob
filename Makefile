DATE=$(shell date +%I:%M%p)

all:
	grunt

sep:
	@echo "${HR}"
	@echo "Build separately."
	sh ./tools/build_separate.sh

	@echo "Mob successfully built at ${DATE}."
	@echo "${HR}"

clean:
	echo "${HR}"
	echo "Cleaning Mob development environment..."
	@rm -rf .build;

dev:
	grunt dev

update:
	git commit -a -m 'auto update'
	git update ~/Codes/mob
