var appConfig = {
  pluginService: {
    enabled: true,
    url: "/plugins",
  },
  ytica: false,
  logLevel: "info",
  showSupervisorDesktopView: true,
  custom_data: {
    serverless_functions_protocol: "http",
    serverless_functions_port: "3001",
    serverless_functions_domain: "localhost",
    features: {
  activity_skill_filter: {
    enabled: false,
    filter_teams_view: true,
  },
  callbacks: {
    enabled: true,
    allow_requeue: true,
    max_attempts: 3,
    auto_select_task: true,
  },
  caller_id: {
    enabled: true,
  },
  conversation_transfer: {
    enabled: false,
    cold_transfer: true,
    multi_participant: true,
  },
  chat_to_video_escalation: {
    enabled: false,
  },
  conference: {
    enabled: true,
    hold_workaround: false,
  },
  enhanced_crm_container: {
    enabled: true,
    should_display_url_when_no_tasks: true,
    display_url_when_no_tasks: 'https://www.bing.com',
  },
  internal_call: {
    enabled: false,
  },
  scrollable_activities: {
    enabled: true,
  },
  supervisor_barge_coach: {
    enabled: true,
    agent_coaching_panel: true,
    supervisor_monitor_panel: true,
    agent_assistance: true,
    supervisor_alert_toggle: true,
  },
  omni_channel_capacity_management: {
    enabled: false,
    channel: 'chat',
    default_max_capacity: 2,
  },
  device_manager: {
    enabled: true,
  },
  dual_channel_recording: {
    enabled: false,
    channel: 'worker',
  },
  pause_recording: {
    enabled: true,
    include_silence: false,
    indicator_banner: false,
    indicator_permanent: true,
  },
  activity_reservation_handler: {
    enabled: false,
    system_activity_names: {
      available: 'Available',
      onATask: 'On a Task',
      onATaskNoAcd: 'On a Task, No ACD',
      wrapup: 'Wrap Up',
      wrapupNoAcd: 'Wrap Up, No ACD',
    },
  },
  teams_view_filters: {
    enabled: true,
    logFilters: true,
    applied_filters: {
      email: true,
      department: true,
      queue_no_worker_data: true,
      queue_worker_data: false,
      team: true,
      agent_skills: false,
    },
    department_options: [
      'General Management',
      'Marketing',
      'Operations',
      'Finance',
      'Sales',
      'Human Resources',
      'Purchasing',
      'Customer Service',
      'Recruiting',
    ],
    team_options: [
      'Blue Team',
      'Red Team',
      'Gold Team',
      'VIP Team',
      'Orange Team',
      'Yellow Team',
      'Green Team',
      'Purple Team',
      'Gray Team',
    ],
  },
  supervisor_capacity: {
    enabled: true,
  },
  schedule_manager: {
    enabled: false,
  },
  multi_call: {
    enabled: false,
  },
  hang_up_by: {
    enabled: false,
  },
  chat_transfer: {
    enabled: true,
  },
  agent_automation: {
    enabled: true,
    configuration: [
      {
        channel: 'voice',
        auto_accept: false,
        auto_select: false,
        auto_wrapup: false,
        required_attributes: [],
        wrapup_time: 30000,
      },
      {
        channel: 'chat',
        auto_accept: true,
        auto_select: true,
        auto_wrapup: true,
        required_attributes: [],
        wrapup_time: 30000,
      },
    ],
  },
  supervisor_complete_reservation: {
    enabled: true,
    outcome: 'Completed by supervisor',
  },
  canned_responses: {
    enabled: true,
    location: 'MessageInputActions',
  },
  custom_hold_music: {
    enabled: false,
    url: '',
  },
  custom_transfer_directory: {
    enabled: false,
    use_paste_search_icon: false,
    queue: {
      enabled: true,
      show_only_queues_with_available_workers: true,
      show_real_time_data: true,
      enforce_queue_filter_from_worker_object: true,
      enforce_global_exclude_filter: false,
      global_exclude_filter: '',
    },
  },
  dispositions: {
    enabled: false,
    enable_notes: true,
    require_disposition: false,
    global_dispositions: [
      'Resolved',
      'Not Resolved',
      'Follow-up Required',
      'Escalation',
      'Wrong Department',
    ],
    per_queue: {
      exampleQueueSid: {
        require_disposition: true,
        dispositions: [
          'Promotional Sale',
          'Renewal',
        ],
      },
    },
  },
}
  },
};


