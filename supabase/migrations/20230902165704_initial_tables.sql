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