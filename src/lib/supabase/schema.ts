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
          account: string | null
          auth_info_seq: number
          created_at: string | null
          delete_yn: string | null
          oauth2_seq: number | null
          type: number | null
          updated_at: string | null
          user_seq: number | null
        }
        Insert: {
          account?: string | null
          auth_info_seq?: never
          created_at?: string | null
          delete_yn?: string | null
          oauth2_seq?: number | null
          type?: number | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Update: {
          account?: string | null
          auth_info_seq?: never
          created_at?: string | null
          delete_yn?: string | null
          oauth2_seq?: number | null
          type?: number | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "t_auth_info_oauth2_seq_fkey"
            columns: ["oauth2_seq"]
            isOneToOne: false
            referencedRelation: "t_oauth2"
            referencedColumns: ["oauth2_seq"]
          },
          {
            foreignKeyName: "t_auth_info_user_seq_fkey"
            columns: ["user_seq"]
            isOneToOne: false
            referencedRelation: "t_users"
            referencedColumns: ["user_seq"]
          }
        ]
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
          pray_seq: number
          title: string | null
          updated_at: string | null
          user_seq: number | null
        }
        Insert: {
          content?: Json | null
          created_at?: string | null
          delete_yn?: string | null
          pray_seq?: never
          title?: string | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Update: {
          content?: Json | null
          created_at?: string | null
          delete_yn?: string | null
          pray_seq?: never
          title?: string | null
          updated_at?: string | null
          user_seq?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "t_pray_user_seq_fkey"
            columns: ["user_seq"]
            isOneToOne: false
            referencedRelation: "t_users"
            referencedColumns: ["user_seq"]
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
          updated_at: string | null
          user_seq: number
        }
        Insert: {
          access_level_seq?: number | null
          created_at?: string | null
          delete_yn?: string | null
          group_seq?: number | null
          name?: string | null
          updated_at?: string | null
          user_seq?: never
        }
        Update: {
          access_level_seq?: number | null
          created_at?: string | null
          delete_yn?: string | null
          group_seq?: number | null
          name?: string | null
          updated_at?: string | null
          user_seq?: never
        }
        Relationships: [
          {
            foreignKeyName: "t_users_access_level_seq_fkey"
            columns: ["access_level_seq"]
            isOneToOne: false
            referencedRelation: "t_code_access_level"
            referencedColumns: ["access_level_seq"]
          },
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

export type Tables<
  PublicTableNameOrOptions extends
      | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
      | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
      | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
      | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
