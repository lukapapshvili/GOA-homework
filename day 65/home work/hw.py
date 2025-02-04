def should_take_test(grades, writers):
    """Return True if any grade >= 50 or if any writer agrees."""
    return any(grade >= 50 for grade in grades) or any(writers)


def can_go_out(weather_is_good, time_is_sufficient, ready_to_go):
    """Return True if weather is good and enough time or ready to go."""
    return (weather_is_good and time_is_sufficient) or ready_to_go


def should_step_forward(no_barrier, space_available, signal_from_other_side):
    """Return True if no barrier and space available or signal exists."""
    return (no_barrier and space_available) or signal_from_other_side


def should_pick_up_item(item_accessible, taking_allowed, others_dont_want):
    """Return True if item is accessible and allowed, or no one else wants."""
    return (item_accessible and taking_allowed) or others_dont_want


def should_recall_info(task_relevant, info_needed, time_to_process):
    """Return True if task relevant or info needed and time exists."""
    return (task_relevant or info_needed) and time_to_process


def should_sleep(is_late, is_tired, wake_up_early, lights_off):
    """Return True if late and tired, or early wake up and lights off."""
    return (is_late and is_tired) or (wake_up_early and lights_off)


def should_go_to_party(friends_agree, no_work_next_day, party_is_near):
    """Return True if friends agree and no work, or party nearby."""
    return (friends_agree and no_work_next_day) or party_is_near


def should_stay_home(is_rainy_or_snowy, no_outside_plans):
    """Return True if bad weather and no plans for going out."""
    return is_rainy_or_snowy and no_outside_plans


def should_go_running(is_dry_weather, shoes_available, friend_ready):
    """Return True if weather dry and shoes ready, or friend ready."""
    return (is_dry_weather and shoes_available) or friend_ready


def should_watch_football(is_weekend, no_other_tasks, favorite_team_playing):
    """Return True if weekend and free or favorite team playing."""
    return (is_weekend and no_other_tasks) or favorite_team_playing



def example_usage():
    print(should_take_test([30, 60], [False, False]))  # True
    print(can_go_out(True, False, True))  # True
    print(should_step_forward(False, True, True))  # True
    print(should_pick_up_item(True, True, False))  # True
    print(should_recall_info(False, True, True))  # True
    print(should_sleep(True, True, False, False))  # True
    print(should_go_to_party(True, True, False))  # True
    print(should_stay_home(True, True))  # True
    print(should_go_running(True, False, True))  # True
    print(should_watch_football(True, False, True))  # True


