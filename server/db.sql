--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Homebrew)
-- Dumped by pg_dump version 14.8 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: jia
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text NOT NULL,
    img character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);


ALTER TABLE public.posts OWNER TO jia;

--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: jia
--

COPY public.posts (id, title, content, img, created_at) FROM stdin;
\.


--
-- PostgreSQL database dump complete
--

