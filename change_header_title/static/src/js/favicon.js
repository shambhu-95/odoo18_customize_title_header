/** @odoo-module **/

import { WebClient } from "@web/webclient/webclient";
import { patch } from "@web/core/utils/patch";

patch(WebClient.prototype, "change_header_title.WebClient", {
    setup() {
        super.setup();
        this.title.setParts({ zopenerp: "Jeevanora" });
    },
});
