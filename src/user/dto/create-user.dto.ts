import { IsString, IsInt, IsBoolean, IsOptional, IsUrl } from 'class-validator';

export class CreateUserDto {
    @IsInt()
    id: number;
  
    @IsString()
    login: string;
  
    @IsOptional()
    @IsString()
    node_id?: string;
  
    @IsOptional()
    @IsUrl()
    avatar_url?: string;
  
    @IsOptional()
    @IsString()
    gravatar_id?: string;
  
    @IsUrl()
    url: string;
  
    @IsUrl()
    html_url: string;
  
    @IsUrl()
    followers_url: string;
  
    @IsUrl()
    following_url: string;
  
    @IsUrl()
    gists_url: string;
  
    @IsUrl()
    starred_url: string;
  
    @IsUrl()
    subscriptions_url: string;
  
    @IsUrl()
    organizations_url: string;
  
    @IsUrl()
    repos_url: string;
  
    @IsUrl()
    events_url: string;
  
    @IsUrl()
    received_events_url: string;
  
    @IsString()
    type: string;
  
    @IsBoolean()
    site_admin: boolean;
}
