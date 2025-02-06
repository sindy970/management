-- CreateTable
CREATE TABLE "exel_file" (
    "seq" BIGSERIAL NOT NULL,
    "original_name" VARCHAR,
    "name" VARCHAR,
    "size" VARCHAR,
    "mime_type" VARCHAR,
    "classification" VARCHAR,
    "delete_yn" VARCHAR DEFAULT 'N',
    "create_user" BIGINT,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_user" BIGINT,
    "update_date" TIMESTAMPTZ(6),
    "delete_user" BIGINT,
    "delete_date" TIMESTAMPTZ(6),

    CONSTRAINT "exel_file_pkey" PRIMARY KEY ("seq")
);

-- CreateTable
CREATE TABLE "information" (
    "seq" BIGSERIAL NOT NULL,
    "name" VARCHAR,
    "tel" VARCHAR,
    "birth" VARCHAR,
    "gubun" VARCHAR,
    "distribution_yn" VARCHAR DEFAULT 'N',
    "distribution_user" BIGINT,
    "delete_yn" VARCHAR,
    "create_user" BIGINT,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_user" BIGINT,
    "update_date" TIMESTAMPTZ(6),
    "delete_user" BIGINT,
    "delete_date" TIMESTAMPTZ(6),

    CONSTRAINT "information_pkey" PRIMARY KEY ("seq")
);

-- CreateTable
CREATE TABLE "memo" (
    "seq" BIGSERIAL NOT NULL,
    "information_seq" BIGINT,
    "content" VARCHAR,
    "delete_yn" VARCHAR DEFAULT 'N',
    "create_user" BIGINT,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_user" BIGINT,
    "update_date" TIMESTAMPTZ(6),
    "delete_user" BIGINT,
    "delete_date" TIMESTAMPTZ(6),

    CONSTRAINT "memo_pkey" PRIMARY KEY ("seq")
);

-- CreateTable
CREATE TABLE "user" (
    "seq" BIGSERIAL NOT NULL,
    "id" VARCHAR,
    "password" VARCHAR,
    "name" VARCHAR,
    "auth" INTEGER,
    "use_yn" VARCHAR DEFAULT 'Y',
    "delete_yn" VARCHAR DEFAULT 'N',
    "create_user" BIGINT,
    "create_date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_user" BIGINT,
    "update_date" TIMESTAMPTZ(6),
    "delete_user" BIGINT,
    "delete_date" TIMESTAMPTZ(6),

    CONSTRAINT "user_pkey" PRIMARY KEY ("seq")
);
