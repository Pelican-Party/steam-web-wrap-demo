#!/usr/bin/env -S deno run -A --watch --no-lock

import { serveDir } from "jsr:@std/http/file-server";

Deno.serve((req: Request) => {
	return serveDir(req, {
		showDirListing: true,
		showIndex: true,
	});
});
