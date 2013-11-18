DATE=$(shell date +%I:%M%p)
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#

all:
	@echo "${HR}"
	@echo "Building Mob..."
	rm -rf ./.build; mkdir -p .build;
	cat less/*.less > .build/mob.less
	lessc .build/mob.less .build/mob.css
	rm -rf release;
	mkdir -p release/css
	cp .build/mob.css release/css/mob.css ;
	cp .build/mob.css docs/css/mob.css
	cat js/*.js > .build/mob.js
	mkdir -p release/js
	cp .build/mob.js release/js/mob.js
	cp .build/mob.js docs/js/mob.js
	mkdir -p release/img
	cp -r img release/
	cp -r img docs/
	@echo "Mob successfully built at ${DATE}."
	@echo "${HR}"

clean:
	echo "${HR}"
	echo "Cleaning Mob development environment..."
	@rm -rf .build;

dev:
	@./tools/dev.sh

love:
	@./tools/dev.sh
