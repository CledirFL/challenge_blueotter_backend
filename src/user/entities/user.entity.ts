import { Repository } from 'src/repository/entities/repository.entity';
import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    id: number;

    @Column({ length: 50, unique: true })
    login: string;

    @Column({ nullable: true, })
    node_id: string;

    @Column({ nullable: true, })
    avatar_url: string;

    @Column({ nullable: true, })
    gravatar_id: string;

    @Column({ length: 255 })
    url: string;

    @Column({ length: 255 })
    html_url: string;

    @Column({ length: 255 })
    followers_url: string;

    @Column({ length: 255 })
    following_url: string;

    @Column({ length: 255 })
    gists_url: string;

    @Column({ length: 255 })
    starred_url: string;

    @Column({ length: 255 })
    subscriptions_url: string;

    @Column({ length: 255 })
    organizations_url: string;

    @Column({ length: 255 })
    repos_url: string;

    @Column({ length: 255 })
    events_url: string;

    @Column({ length: 255 })
    received_events_url: string;

    @Column({ length: 50 })
    type: string;

    @Column({ default: false })
    site_admin: boolean;

    @Column({ nullable: true, })
    name: string;

    @Column({ nullable: true, })
    company: string;

    @Column({ nullable: true, })
    blog: string;

    @Column({ nullable: true, })
    location: string;

    @Column({ nullable: true, })
    email: string;

    @Column({ nullable: true, })
    hireable: boolean;

    @Column({ nullable: true, type: 'text' })
    bio: string;

    @Column({ nullable: true, })
    twitter_username: string;

    @Column({ default: 0 })
    public_repos: number;

    @Column({ default: 0 })
    public_gists: number;

    @Column({ default: 0 })
    followers: number;

    @Column({ default: 0 })
    following: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Repository, repository => repository.owner)
    repositories: Repository[];
}
