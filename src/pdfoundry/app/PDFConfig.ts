/* Copyright 2020 Andrew Cuccinello
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Settings from '../Settings';
import Api from '../Api';
import { getAbsoluteURL } from '../Util';
import { PDFType } from '../common/types/PDFType';
import { BUTTON_GITHUB, BUTTON_HELP } from '../common/helpers/header';

const PDF_TYPES: {
    // Convince compiler to error if type changes
    [P in PDFType]: {
        name: string;
        value: PDFType;
    };
} = {
    [PDFType.Static]: {
        value: PDFType.Static,
        name: 'Static PDF',
    },
    [PDFType.Fillable]: {
        value: PDFType.Fillable,
        name: 'Fillable PDF',
    },
    [PDFType.Actor]: {
        value: PDFType.Actor,
        name: 'Actor Sheet',
    },
};

/**
 * Extends the base ItemSheet for linked PDF viewing.
 * @private
 */
export class PDFConfig extends JournalSheet {
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes = [...options.classes!, Settings.CSS_CLASS];
        options.template = `${Settings.PATH_TEMPLATES}/sheet/pdf-config.html`;
        options.width = 650;
        options.height = 'auto';
        return options;
    }

    protected _getHeaderButtons(): any[] {
        const buttons = super._getHeaderButtons();
        buttons.unshift(BUTTON_HELP);
        buttons.unshift(BUTTON_GITHUB);
        return buttons;
    }

    protected activateListeners(html: JQuery<HTMLElement>): void {
        super.activateListeners(html);

        const urlInput = html.find('#data-url');
        const offsetInput = html.find('#data-offset');

        // Block enter from displaying the PDF
        html.find('input').on('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        });

        // Browse button
        html.find('#pdf-browse').on('click', async function (event) {
            event.preventDefault();

            const picker = new FilePicker({});
            // @ts-ignore TODO: foundry-pc-types
            picker.extensions = ['.pdf'];
            picker.field = urlInput[0];

            let urlValue = urlInput.val();
            if (urlValue !== undefined) {
                await picker.browse(urlValue.toString().trim());
            }

            picker.render(true);
        });

        // Test button
        html.find('#pdf-test').on('click', function (event) {
            event.preventDefault();

            let urlValue = urlInput.val();
            let offsetValue = offsetInput.val();

            if (urlValue === null || urlValue === undefined) return;
            if (offsetValue === null || offsetValue === undefined) return;

            urlValue = urlValue.toString();

            urlValue = getAbsoluteURL(urlValue);

            if (offsetValue.toString().trim() === '') {
                offsetValue = 0;
            }
            offsetValue = parseInt(offsetValue as string);

            Api.openURL(urlValue, 5 + offsetValue, false);
        });
    }

    getData(): ItemSheetData {
        const data = super.getData();

        data['CONST'] = {
            pdf_types: Object.values(PDF_TYPES),
        };

        return data;
    }
}