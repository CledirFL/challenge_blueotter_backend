import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class Repository {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 })
    node_id: string;
  
    @Column({ length: 255 })
    name: string;
  
    @Column({ length: 255 })
    full_name: string;
  
    @Column()
    private: boolean;
  
    @ManyToOne(() => User, user => user.repositories)
    owner: User;
  
    @Column({ nullable: true, length: 255 })
    description: string;
  
    @Column()
    fork: boolean;
  
    @Column({ length: 255 })
    html_url: string;
  
    @Column({ length: 255 })
    url: string;
  
    @Column({ length: 255 })
    forks_url: string;
  
    @Column({ length: 255 })
    keys_url: string;
  
    @Column({ length: 255 })
    collaborators_url: string;
  
    @Column({ length: 255 })
    teams_url: string;
  
    @Column({ length: 255 })
    hooks_url: string;
  
    @Column({ length: 255 })
    issue_events_url: string;
  
    @Column({ length: 255 })
    events_url: string;
  
    @Column({ length: 255 })
    assignees_url: string;
  
    @Column({ length: 255 })
    branches_url: string;
  
    @Column({ length: 255 })
    tags_url: string;
  
    @Column({ length: 255 })
    blobs_url: string;
  
    @Column({ length: 255 })
    git_tags_url: string;
  
    @Column({ length: 255 })
    git_refs_url: string;
  
    @Column({ length: 255 })
    trees_url: string;
  
    @Column({ length: 255 })
    statuses_url: string;
  
    @Column({ length: 255 })
    languages_url: string;
  
    @Column({ length: 255 })
    stargazers_url: string;
  
    @Column({ length: 255 })
    contributors_url: string;
  
    @Column({ length: 255 })
    subscribers_url: string;
  
    @Column({ length: 255 })
    subscription_url: string;
  
    @Column({ length: 255 })
    commits_url: string;
  
    @Column({ length: 255 })
    git_commits_url: string;
  
    @Column({ length: 255 })
    comments_url: string;
  
    @Column({ length: 255 })
    issue_comment_url: string;
  
    @Column({ length: 255 })
    contents_url: string;
  
    @Column({ length: 255 })
    compare_url: string;
  
    @Column({ length: 255 })
    merges_url: string;
  
    @Column({ length: 255 })
    archive_url: string;
  
    @Column({ length: 255 })
    downloads_url: string;
  
    @Column({ length: 255 })
    issues_url: string;
  
    @Column({ length: 255 })
    pulls_url: string;
  
    @Column({ length: 255 })
    milestones_url: string;
  
    @Column({ length: 255 })
    notifications_url: string;
  
    @Column({ length: 255 })
    labels_url: string;
  
    @Column({ length: 255 })
    releases_url: string;
  
    @Column({ length: 255 })
    deployments_url: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    @Column({ nullable: true })
    pushed_at: Date;
  
    @Column({ length: 255 })
    git_url: string;
  
    @Column({ length: 255 })
    ssh_url: string;
  
    @Column({ length: 255 })
    clone_url: string;
  
    @Column({ length: 255 })
    svn_url: string;
  
    @Column()
    size: number;
  
    @Column()
    stargazers_count: number;
  
    @Column()
    watchers_count: number;
  
    @Column({ nullable: true, length: 255 })
    language: string;
  
    @Column()
    has_issues: boolean;
  
    @Column()
    has_projects: boolean;
  
    @Column()
    has_downloads: boolean;
  
    @Column()
    has_wiki: boolean;
  
    @Column()
    has_pages: boolean;
  
    @Column()
    has_discussions: boolean;
  
    @Column()
    forks_count: number;
  
    @Column({ nullable: true, length: 255 })
    mirror_url: string;
  
    @Column()
    archived: boolean;
  
    @Column()
    disabled: boolean;
  
    @Column()
    open_issues_count: number;
  
    @Column({ nullable: true, length: 255 })
    license: string;
  
    @Column()
    allow_forking: boolean;
  
    @Column()
    is_template: boolean;
  
    @Column()
    web_commit_signoff_required: boolean;
  
    @Column('simple-array')
    topics: string[];
  
    @Column({ length: 50 })
    visibility: string;
  
    @Column()
    forks: number;
  
    @Column()
    open_issues: number;
  
    @Column()
    watchers: number;
  
    @Column({ length: 255 })
    default_branch: string;
}
