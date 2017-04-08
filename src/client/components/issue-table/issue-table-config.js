/**
 * Created by chia-yenhung on 4/7/17.
 */
import LabelTitle from "./components/label-title";
import Labels from "./components/labels";
import User from "./components/user";

export const columns = [
  {
    title: "Issue No and Title",
    name: {
      number: "number",
      title: "title"
    },
    component: LabelTitle
  },
  {
    title: "Labels",
    name: "labels",
    component: Labels
  },
  {
    title: "Username and Gravator",
    name: "user",
    component: User
  },
  {
    title: "Summary",
    name: "body"
  }
];

export const results = [
  {
    "url": "https://api.github.com/repos/rails/rails/issues/28703",
    "repository_url": "https://api.github.com/repos/rails/rails",
    "labels_url": "https://api.github.com/repos/rails/rails/issues/28703/labels{/name}",
    "comments_url": "https://api.github.com/repos/rails/rails/issues/28703/comments",
    "events_url": "https://api.github.com/repos/rails/rails/issues/28703/events",
    "html_url": "https://github.com/rails/rails/issues/28703",
    "id": 220319046,
    "number": 28703,
    "title": "(Rails 4.2/5) StatementInvalid error when using includes() on a has_many :through with a custom scope",
    "user": {
      "login": "aergonaut",
      "id": 284007,
      "avatar_url": "https://avatars3.githubusercontent.com/u/284007?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/aergonaut",
      "html_url": "https://github.com/aergonaut",
      "followers_url": "https://api.github.com/users/aergonaut/followers",
      "following_url": "https://api.github.com/users/aergonaut/following{/other_user}",
      "gists_url": "https://api.github.com/users/aergonaut/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/aergonaut/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/aergonaut/subscriptions",
      "organizations_url": "https://api.github.com/users/aergonaut/orgs",
      "repos_url": "https://api.github.com/users/aergonaut/repos",
      "events_url": "https://api.github.com/users/aergonaut/events{/privacy}",
      "received_events_url": "https://api.github.com/users/aergonaut/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2017-04-07T20:24:08Z",
    "updated_at": "2017-04-07T20:24:08Z",
    "closed_at": null,
    "body": "### Steps to reproduce\r\n\r\n1. Have 3 models (e.g. User, Group, Membership). Groups can be `fancy` or not and have a scope to filter to only fancy groups. User `has_many :memberships` and also `has_many :groups, through: :memberships`. User _also_ `has_many :fancy_groups, -> { fancy }, through: :memberships`.\r\n2. Try to do `User.includes(:fancy_groups)`.\r\n\r\nI have uploaded examples demonstrating the error to this Gist: https://gist.github.com/aergonaut/7ebd847721f64087c99de7249767468c\r\n\r\nHere's the Rails 4.2 version inline:\r\n\r\n```ruby\r\n\r\nrequire 'bundler/inline'\r\n\r\ngemfile(true) do\r\n  source \"http://rubygems.org\"\r\n\r\n  gem \"activerecord\", \"~> 4.2\"\r\n  gem \"sqlite3\"\r\nend\r\n\r\nrequire \"active_record\"\r\nrequire \"minitest/autorun\"\r\nrequire \"logger\"\r\n\r\nActiveRecord::Base.establish_connection(adapter: \"sqlite3\", database: \":memory:\")\r\nActiveRecord::Base.logger = Logger.new(STDOUT)\r\n\r\nActiveRecord::Schema.define do\r\n  create_table :users, force: true do |t|\r\n  end\r\n\r\n  create_table :groups, force: true do |t|\r\n    t.boolean :fancy\r\n  end\r\n\r\n  create_table :memberships, force: true do |t|\r\n    t.integer :user_id\r\n    t.integer :group_id\r\n  end\r\nend\r\n\r\nclass User < ActiveRecord::Base\r\n  has_many :memberships\r\n  has_many :groups, through: :memberships\r\n  has_many :fancy_groups, -> { fancy },\r\n    class_name: \"Group\",\r\n    through: :memberships,\r\n    source: :group\r\nend\r\n\r\nclass Group < ActiveRecord::Base\r\n  has_many :memberships\r\n  has_many :users, through: :memberships\r\n\r\n  scope :fancy, -> { where(fancy: true) }\r\nend\r\n\r\nclass Membership < ActiveRecord::Base\r\n  belongs_to :user\r\n  belongs_to :group\r\nend\r\n\r\nclass IssueTest < Minitest::Test\r\n  def setup\r\n    user = User.create!\r\n\r\n    group1 = Group.create!\r\n    group2 = Group.create!(fancy: true)\r\n\r\n    user.groups << group1\r\n    user.groups << group2\r\n    user.save!\r\n  end\r\n\r\n  def test_fancy_groups_includes\r\n    User.includes(:fancy_groups).to_a\r\n  end\r\nend\r\n```\r\n\r\n### Expected behavior\r\n\r\n`User.include(:fancy_groups)` should execute successfully.\r\n\r\n### Actual behavior\r\n\r\nStatementInvalid error is thrown instead:\r\n\r\n```\r\nActiveRecord::StatementInvalid: SQLite3::SQLException: no such column: groups.fancy: SELECT \"memberships\".* FROM \"memberships\" WHERE \"groups\".\"fancy\" = ? AND \"memberships\".\"user_id\" = 1\r\n```\r\n\r\n### System configuration\r\n**Rails version**: 4.2 or 5\r\n\r\n**Ruby version**: ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-darwin15]\r\n"
  },
  {
    "url": "https://api.github.com/repos/rails/rails/issues/28702",
    "repository_url": "https://api.github.com/repos/rails/rails",
    "labels_url": "https://api.github.com/repos/rails/rails/issues/28702/labels{/name}",
    "comments_url": "https://api.github.com/repos/rails/rails/issues/28702/comments",
    "events_url": "https://api.github.com/repos/rails/rails/issues/28702/events",
    "html_url": "https://github.com/rails/rails/pull/28702",
    "id": 220288480,
    "number": 28702,
    "title": "Support password in ActionCable redis configuration",
    "user": {
      "login": "will-in-wi",
      "id": 1298231,
      "avatar_url": "https://avatars0.githubusercontent.com/u/1298231?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/will-in-wi",
      "html_url": "https://github.com/will-in-wi",
      "followers_url": "https://api.github.com/users/will-in-wi/followers",
      "following_url": "https://api.github.com/users/will-in-wi/following{/other_user}",
      "gists_url": "https://api.github.com/users/will-in-wi/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/will-in-wi/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/will-in-wi/subscriptions",
      "organizations_url": "https://api.github.com/users/will-in-wi/orgs",
      "repos_url": "https://api.github.com/users/will-in-wi/repos",
      "events_url": "https://api.github.com/users/will-in-wi/events{/privacy}",
      "received_events_url": "https://api.github.com/users/will-in-wi/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [
      {
        "id": 300028327,
        "url": "https://api.github.com/repos/rails/rails/labels/actioncable",
        "name": "actioncable",
        "color": "bfdadc",
        "default": false
      }
    ],
    "state": "open",
    "locked": false,
    "assignee": {
      "login": "matthewd",
      "id": 1034,
      "avatar_url": "https://avatars2.githubusercontent.com/u/1034?v=3",
      "gravatar_id": "",
      "url": "https://api.github.com/users/matthewd",
      "html_url": "https://github.com/matthewd",
      "followers_url": "https://api.github.com/users/matthewd/followers",
      "following_url": "https://api.github.com/users/matthewd/following{/other_user}",
      "gists_url": "https://api.github.com/users/matthewd/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/matthewd/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/matthewd/subscriptions",
      "organizations_url": "https://api.github.com/users/matthewd/orgs",
      "repos_url": "https://api.github.com/users/matthewd/repos",
      "events_url": "https://api.github.com/users/matthewd/events{/privacy}",
      "received_events_url": "https://api.github.com/users/matthewd/received_events",
      "type": "User",
      "site_admin": false
    },
    "assignees": [
      {
        "login": "matthewd",
        "id": 1034,
        "avatar_url": "https://avatars2.githubusercontent.com/u/1034?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/matthewd",
        "html_url": "https://github.com/matthewd",
        "followers_url": "https://api.github.com/users/matthewd/followers",
        "following_url": "https://api.github.com/users/matthewd/following{/other_user}",
        "gists_url": "https://api.github.com/users/matthewd/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/matthewd/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/matthewd/subscriptions",
        "organizations_url": "https://api.github.com/users/matthewd/orgs",
        "repos_url": "https://api.github.com/users/matthewd/repos",
        "events_url": "https://api.github.com/users/matthewd/events{/privacy}",
        "received_events_url": "https://api.github.com/users/matthewd/received_events",
        "type": "User",
        "site_admin": false
      }
    ],
    "milestone": null,
    "comments": 4,
    "created_at": "2017-04-07T18:11:27Z",
    "updated_at": "2017-04-07T18:29:38Z",
    "closed_at": null,
    "pull_request": {
      "url": "https://api.github.com/repos/rails/rails/pulls/28702",
      "html_url": "https://github.com/rails/rails/pull/28702",
      "diff_url": "https://github.com/rails/rails/pull/28702.diff",
      "patch_url": "https://github.com/rails/rails/pull/28702.patch"
    },
    "body": "### Summary\r\n\r\nRedis supports being configured to require a password. Redis-rb supports this parameter. All that remains is passing it through.\r\n\r\n### Other Information\r\n\r\nThis is one of my first patches, so please let me know how I can improve it. It looks like there are no Redis specific tests, so I'm not sure how you would like me to proceed on that front.\r\n\r\nThanks!"
  }
];