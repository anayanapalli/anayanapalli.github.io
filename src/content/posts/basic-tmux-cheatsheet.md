---
title: "Basic tmux Cheatsheet"
pubDate: 2024-05-05
---

## Install on a Mac

```
brew install tmux
```

## Check version

```
tmux -V
```

## Abstractions

Sessions are composed of windows which inturn are composed of panes.

Sessions are terminated when the system restarts.

## Prefix

```
<control + b>
```

All shortcuts are preceded by the prefix.

## Enter into session

```
tmux
```

## Create a new window

```
<control + b> + c
```

Current windows are indicated with an asterisk.

## Rename a window

```
<control + b> + ,
```

## Move between windows

```
<control + b> + <window_number>
```

## Create a vertical pane in window

```
<control + b> + %
```

## Create a horizontal pane in window

```
<control + b> + "
```

## Move cursor between panes

```
<control + b> + <left|up|down|right>
```

## Delete a pane

```
exit
```

If you delete all the panes in a window you delete the window.

## Delete a window tmux

```
tmux kill-window -t <window-number>
```

If you delete all the windows, you delete the session.

## Create a new session

```
tmux new -s <session_name>
```

## Detach from a session

```
<control + b> + d
```

## View all tmux sessions

```
tmux ls
```

## Attach to a session

```
tmux attach -t <session_name>
```

The session_name is the session_number if it is not named.

## Rename a session

```
tmux rename-session -t <sessions_number> <session_name>
```

## Kill a session

```
tmux kill-session -t <sessions_name>
```

The session_name is the session_number if it is not named.

## Kill all sessions

```
tmux kill-server
```
