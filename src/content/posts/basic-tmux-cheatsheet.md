---
title: "Basic tmux Cheatsheet"
pubDate: 2024-05-05
---

## Install `tmux` on a Mac

```bash
brew install tmux
```

## Check tmux version

```bash
tmux -V
```

## `tmux` abstractions

Sessions are composed of windows which inturn are composed of panes.

Sessions are terminated when the system restarts.

## `tmux` prefix

```bash
<control + b>
```

All shortcuts are preceded by the prefix.

## Enter into `tmux` session

```bash
tmux
```

## Create a new window

```bash
<control + b> + c
```

Current windows are indicated with an asterisk.

## Rename a window

```bash
<control + b> + ,
```

## Move between windows

```bash
<control + b> + <window_number>
```

## Create a vertical pane in window

```bash
<control + b> + %
```

## Create a horizontal pane in window

```bash
<control + b> + "
```

## Move cursor between panes

```bash
<control + b> + <left|up|down|right>
```

## Delete a pane

```bash
exit
```

If you delete all the panes in a window you delete the window.

## Delete a window tmux

```bash
tmux kill-window -t <window-number>
```

If you delete all the windows, you delete the session.

## Create a new session

```bash
tmux new -s <session_name>
```

## Detach from a session

```bash
<control + b> + d
```

## View all tmux sessions

```bash
tmux ls
```

## Attach to a session

```bash
tmux attach -t <session_name>
```

The session_name is the session_number if it is not named.

## Rename a session

```bash
tmux rename-session -t <sessions_number> <session_name>
```

## Kill a session

```bash
tmux kill-session -t <sessions_name>
```

The session_name is the session_number if it is not named.

## Kill all sessions

```bash
tmux kill-server
```
