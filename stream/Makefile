dependencies:
	echo "installing dependencies"
	pip install --upgrade --user awscli

local:
	open src/index.html

deploy:
	echo "deploying"
	# TODO: Need to change to the actual bucket name
	aws s3 sync --acl public-read src s3://ldchang-peoplepoweredstream
