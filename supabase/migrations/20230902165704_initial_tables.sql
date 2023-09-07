CREATE TABLE public.projects (
  id uuid primary key default uuid_generate_v4(),
  start_date timestamp with time zone not null,
  end_date timestamp with time zone not null
);

CREATE TABLE public.tasks (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  time timestamp with time zone not null,
  completed integer not null default 0,
  project_id uuid not null,
  constraint project_id_fk foreign key (project_id) references public.projects (id)
);

CREATE OR REPLACE FUNCTION public.get_nutrition_progress(
    -- start_date timestamp without time zone,
    -- end_date timestamp without time zone,
    project_id text
) RETURNS TABLE (
    date text
) LANGUAGE sql AS $function$
    select DATE(time)::text
    from public.tasks
    where category = 'Nutrition'
      and completed = 1
      and project_id::text = get_nutrition_progress.project_id
    group by DATE(time), completed
    having COUNT(id) = 5
$function$;

CREATE OR REPLACE FUNCTION public.get_sleep_progress(
    -- start_date timestamp without time zone,
    -- end_date timestamp without time zone,
    project_id text
) RETURNS TABLE (
    date text
) LANGUAGE sql AS $function$
    select DATE(time)::text
    from public.tasks
    where category = 'Sleep'
      and completed = 1
      and project_id::text = get_sleep_progress.project_id
    group by DATE(time), completed
    having COUNT(id) = 2
$function$;

CREATE OR REPLACE FUNCTION public.get_category_progress(
    category text,
    project_id text
) RETURNS TABLE (
    count integer,
    completed integer
) LANGUAGE sql AS $function$
  select COUNT(id), completed
  from public.tasks
  where category = get_category_progress.category
    and project_id::text = get_category_progress.project_id
  group by completed;
$function$;

CREATE OR REPLACE FUNCTION public.get_overall_progress(
    project_id text
) RETURNS TABLE (
    count integer,
    completed integer
) LANGUAGE sql AS $function$
  select COUNT(id), completed
  from public.tasks
  where project_id::text = get_overall_progress.project_id
  group by completed;
$function$;