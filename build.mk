EMACS_PATH := $(HOME)/.config/doom/local/grammars/
SO_NAME := maude.so
LIB_NAME := libtree-sitter-maude.so

build:
	tree-sitter generate
	tree-sitter build

move: build
	cp ${SO_NAME} ${EMACS_PATH}
	mv ${EMACS_PATH}${SO_NAME} ${EMACS_PATH}${LIB_NAME}

run: build move
