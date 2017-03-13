.PHONY: default dependencies local test deploy

default:
	echo "No default action"

dependencies:
	echo "installing dependencies"
	pip install --upgrade --user awscli
	npm install

local:
	open src/index.html

test:
	grunt

deploy:
	echo "deploying"
	# TODO: Need to change to the actual bucket name
	aws s3 sync --acl public-read src s3://ldchang-peoplepoweredstream
