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
          user_id: string
        }
        Insert: {
          end_date: string
          id?: string
          start_date: string
          user_id: string
        }
        Update: {
          end_date?: string
          id?: string
          start_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_id_fk"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      tasks: {
        Row: {
          category: string
          completed: number
          id: string
          name: string
          project_id: string
          time: string
          user_id: string
        }
        Insert: {
          category: string
          completed?: number
          id?: string
          name: string
          project_id: string
          time: string
          user_id: string
        }
        Update: {
          category?: string
          completed?: number
          id?: string
          name?: string
          project_id?: string
          time?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_id_fk"
            columns: ["project_id"]
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_id_fk"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_category_progress: {
        Args: {
          category: string
          project_id: string
        }
        Returns: {
          count: number
          completed: number
        }[]
      }
      get_nutrition_progress: {
        Args: {
          project_id: string
        }
        Returns: {
          date: string
        }[]
      }
      get_overall_progress: {
        Args: {
          project_id: string
        }
        Returns: {
          count: number
          completed: number
        }[]
      }
      get_sleep_progress: {
        Args: {
          project_id: string
        }
        Returns: {
          date: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
