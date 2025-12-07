"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var Sourcebook_1 = require("~/Source/Sourcebook");
(0, vitest_1.test)('Import data from JSON', function () {
    var json = "{\n" +
        "    \"id\": \"c45da80b-ae01-42ec-ada8-99338eecd16c\",\n" +
        "    \"name\": \"Adventure Atlas: The Mortuary\",\n" +
        "    \"slug\": \"adventure-atlas-the-mortuary\",\n" +
        "    \"cover_image\": \"adventure-atlas-the-mortuary.webp\",\n" +
        "    \"description\": \"This supplement explores the Mortuary, its inhabitants, and the adventures buried within. This is a supplement to Planescape: Adventures in the Multiverse. However, you don't need to own that product or know much about Sigil to use this supplement, which includes material suitable for any Dungeons & Dragons campaign.\",\n" +
        "    \"editions\": [\n" +
        "        {\n" +
        "            \"id\": \"e0f91189-8777-411c-b113-f747458a0964\",\n" +
        "            \"name\": \"original\",\n" +
        "            \"formats\": [\"dnd_beyond\"],\n" +
        "            \"release_date\": \"2023-10-17\"\n" +
        "        }\n" +
        "    ],\n" +
        "    \"game_edition\": \"5.5\",\n" +
        "    \"product_ids\": {\n" +
        "        \"wizards-of-the-coast\": \"SRC-00125\"\n" +
        "    },\n" +
        "    \"publication_type\": \"official\",\n" +
        "    \"publisher\": \"wizards-of-the-coast\",\n" +
        "    \"sourcebook_types\": [\n" +
        "        \"lore\",\n" +
        "        \"monsters\"\n" +
        "    ]\n" +
        "}\n";
    var result = (0, Sourcebook_1.createSourcebook)().fromJson(json);
    console.log('output is', result);
    (0, vitest_1.expect)(result === null || result === void 0 ? void 0 : result.name).toBe('Adventure Atlas: The Mortuary');
});
