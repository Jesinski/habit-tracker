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
      projects: {
        Row: {
          end_date: string
          id: string
          start_date: string
        }
        Insert: {
          end_date: string
          id?: string
          start_date: string
        }
        Update: {
          end_date?: string
          id?: string
          start_date?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          category: string
          completed: number
          id: string
          name: string
          project_id: string
          time: string
        }
        Insert: {
          category: string
          completed?: number
          id?: string
          name: string
          project_id: string
          time: string
        }
        Update: {
          category?: string
          completed?: number
          id?: string
          name?: string
          project_id?: string
          time?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_id_fk"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
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
