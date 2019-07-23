#!/bin/bash

# COMP_WORDS: an array of all the words typed after the name of the program the compspec belongs to
# COMP_CWORD: an index of the COMP_WORDS array pointing to the word the current cursor is at - in other words, the index of the word the cursor was when the tab key was pressed
# COMP_LINE: the current command line

# Path to root scripts directory
ROOT_DIR=${BASH_SOURCE[0]%/*}
SCRIPTS_DIR="$ROOT_DIR/scripts"

_rn_utils_completions()
{
    case $COMP_CWORD in
        1)
            # Platform or sript
            GENERAL_SCRIPTS_AND_DIRS=$(ls $SCRIPTS_DIR)
            COMPREPLY+=($(compgen -W "$GENERAL_SCRIPTS_AND_DIRS" "${COMP_WORDS[COMP_CWORD]}"))
        ;;
        2)
            # Script under platform or ???
            PLATFORM_SCRIPTS=$(ls $SCRIPTS_DIR/${COMP_WORDS[1]})
            COMPREPLY+=($(compgen -W "$PLATFORM_SCRIPTS" "${COMP_WORDS[COMP_CWORD]}"))
        ;;
    esac
    
}

complete -F _rn_utils_completions rn-utils