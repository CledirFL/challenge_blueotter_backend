import { IsString, IsInt, IsBoolean, IsOptional, IsUrl, IsArray, IsDate, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateRepogithubDto {
    @IsInt()
    id: number;
  
    @IsString()
    node_id: string;
  
    @IsString()
    name: string;
  
    @IsString()
    full_name: string;
  
    @IsBoolean()
    private: boolean;
  
    @ValidateNested()
    @Type(() => CreateUserDto)
    owner: CreateUserDto;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsBoolean()
    fork: boolean;
  
    @IsUrl()
    html_url: string;
  
    @IsUrl()
    url: string;
  
    @IsUrl()
    forks_url: string;
  
    @IsUrl()
    keys_url: string;
  
    @IsUrl()
    collaborators_url: string;
  
    @IsUrl()
    teams_url: string;
  
    @IsUrl()
    hooks_url: string;
  
    @IsUrl()
    issue_events_url: string;
  
    @IsUrl()
    events_url: string;
  
    @IsUrl()
    assignees_url: string;
  
    @IsUrl()
    branches_url: string;
  
    @IsUrl()
    tags_url: string;
  
    @IsUrl()
    blobs_url: string;
  
    @IsUrl()
    git_tags_url: string;
  
    @IsUrl()
    git_refs_url: string;
  
    @IsUrl()
    trees_url: string;
  
    @IsUrl()
    statuses_url: string;
  
    @IsUrl()
    languages_url: string;
  
    @IsUrl()
    stargazers_url: string;
  
    @IsUrl()
    contributors_url: string;
  
    @IsUrl()
    subscribers_url: string;
  
    @IsUrl()
    subscription_url: string;
  
    @IsUrl()
    commits_url: string;
  
    @IsUrl()
    git_commits_url: string;
  
    @IsUrl()
    comments_url: string;
  
    @IsUrl()
    issue_comment_url: string;
  
    @IsUrl()
    contents_url: string;
  
    @IsUrl()
    compare_url: string;
  
    @IsUrl()
    merges_url: string;
  
    @IsUrl()
    archive_url: string;
  
    @IsUrl()
    downloads_url: string;
  
    @IsUrl()
    issues_url: string;
  
    @IsUrl()
    pulls_url: string;
  
    @IsUrl()
    milestones_url: string;
  
    @IsUrl()
    notifications_url: string;
  
    @IsUrl()
    labels_url: string;
  
    @IsUrl()
    releases_url: string;
  
    @IsUrl()
    deployments_url: string;
  
    @IsDate()
    @Type(() => Date)
    created_at: Date;
  
    @IsDate()
    @Type(() => Date)
    updated_at: Date;
  
    @IsOptional()
    @IsDate()
    @Type(() => Date)
    pushed_at?: Date;
  
    @IsUrl()
    git_url: string;
  
    @IsUrl()
    ssh_url: string;
  
    @IsUrl()
    clone_url: string;
  
    @IsUrl()
    svn_url: string;
  
    @IsInt()
    size: number;
  
    @IsInt()
    stargazers_count: number;
  
    @IsInt()
    watchers_count: number;
  
    @IsOptional()
    @IsString()
    language?: string;
  
    @IsBoolean()
    has_issues: boolean;
  
    @IsBoolean()
    has_projects: boolean;
  
    @IsBoolean()
    has_downloads: boolean;
  
    @IsBoolean()
    has_wiki: boolean;
  
    @IsBoolean()
    has_pages: boolean;
  
    @IsBoolean()
    has_discussions: boolean;
  
    @IsInt()
    forks_count: number;
  
    @IsOptional()
    @IsString()
    mirror_url?: string;
  
    @IsBoolean()
    archived: boolean;
  
    @IsBoolean()
    disabled: boolean;
  
    @IsInt()
    open_issues_count: number;
  
    @IsOptional()
    @IsString()
    license?: string;
  
    @IsBoolean()
    allow_forking: boolean;
  
    @IsBoolean()
    is_template: boolean;
  
    @IsBoolean()
    web_commit_signoff_required: boolean;
  
    @IsArray()
    @IsString({ each: true })
    topics: string[];
  
    @IsString()
    visibility: string;
  
    @IsInt()
    forks: number;
  
    @IsInt()
    open_issues: number;
  
    @IsInt()
    watchers: number;
  
    @IsString()
    default_branch: string;
}
