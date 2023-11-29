export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      t_auth_info: {
        Row: {
          auth_info_seq: number
          created_at: string | null
          deleted_yn: string | null
          oauth2_seq: number | null
          type: number | null
          updated_at: string | null
          user_seq: number | null
        }
        Insert: {
          auth_info_seq?: never
          created_at?: string | null
          deleted_yn?: string | null
          oauth2_seq?: number | null
          type?: number | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Update: {
          auth_info_seq?: never
          created_at?: string | null
          deleted_yn?: string | null
          oauth2_seq?: number | null
          type?: number | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Relationships: []
      }
      t_code_access_level: {
        Row: {
          access_level_seq: number
          name: string | null
        }
        Insert: {
          access_level_seq?: number
          name?: string | null
        }
        Update: {
          access_level_seq?: number
          name?: string | null
        }
        Relationships: []
      }
      t_groups: {
        Row: {
          access_level_seq: number | null
          group_seq: number
          master_user_seq: number | null
          name: string | null
        }
        Insert: {
          access_level_seq?: number | null
          group_seq?: never
          master_user_seq?: number | null
          name?: string | null
        }
        Update: {
          access_level_seq?: number | null
          group_seq?: never
          master_user_seq?: number | null
          name?: string | null
        }
        Relationships: []
      }
      t_oauth2: {
        Row: {
          name: string | null
          oauth2_seq: number
        }
        Insert: {
          name?: string | null
          oauth2_seq?: never
        }
        Update: {
          name?: string | null
          oauth2_seq?: never
        }
        Relationships: []
      }
      t_pray: {
        Row: {
          content: Json | null
          created_at: string | null
          delete_yn: string | null
          group_seq: number | null
          pray_seq: number
          title: string | null
          updated_at: string | null
          user_seq: number | null
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          delete_yn?: string | null
          group_seq?: number | null
          pray_seq?: never
          title?: string | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          delete_yn?: string | null
          group_seq?: number | null
          pray_seq?: never
          title?: string | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "t_pray_group_seq_fkey"
            columns: ["group_seq"]
            isOneToOne: false
            referencedRelation: "t_groups"
            referencedColumns: ["group_seq"]
          }
        ]
      }
      t_users: {
        Row: {
          access_level_seq: number | null
          created_at: string | null
          delete_yn: string | null
          group_seq: number | null
          name: string | null
          oauth2_seq: number | null
          updated_at: string | null
          user_seq: number
        }
        Insert: {
          access_level_seq?: number | null
          created_at?: string | null
          delete_yn?: string | null
          group_seq?: number | null
          name?: string | null
          oauth2_seq?: number | null
          updated_at?: string | null
          user_seq?: never
        }
        Update: {
          access_level_seq?: number | null
          created_at?: string | null
          delete_yn?: string | null
          group_seq?: number | null
          name?: string | null
          oauth2_seq?: number | null
          updated_at?: string | null
          user_seq?: never
        }
        Relationships: [
          {
            foreignKeyName: "t_users_group_seq_fkey"
            columns: ["group_seq"]
            isOneToOne: false
            referencedRelation: "t_groups"
            referencedColumns: ["group_seq"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
