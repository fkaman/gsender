import { ATCIVariable } from 'app/features/ATC/components/Configuration/hooks/useConfigStore.tsx';
import atciTemplatesV20260410 from './atci_templates_v20260410.json';

export type Macro = {
    name: string;
    content: string;
};

export interface ATCIMacroConfig {
    version: number;
    sdVersion: number;
    variables: {
        [key: string]: ATCIVariable;
    };
    variableFile: string;
    macros: Macro[];
}

export interface ATCIJSON {
    version: number;
    variables: {
        [key: string]: {
            default: number;
            value: number;
        };
    };
    variableFile: string;
    files: string[];
}

type ATCITemplateFile = Omit<ATCIMacroConfig, 'sdVersion'> &
    Partial<Pick<ATCIMacroConfig, 'sdVersion'>>;

const rawDefaultATCIMacros = atciTemplatesV20260410 as ATCITemplateFile;

const defaultMacros: Macro[] = rawDefaultATCIMacros.macros.map((macro) => ({
    name: macro.name,
    content: macro.content,
}));

const getMacroContent = (name: string): string =>
    defaultMacros.find((macro) => macro.name === name)?.content ?? '';

export const P302Content = getMacroContent('P302.macro');
export const P506Content = getMacroContent('P506.macro');
export const P900Content = getMacroContent('P900.macro');
export const P502Content = getMacroContent('P502.macro');
export const P500Content = getMacroContent('P500.macro');
export const P509Content = getMacroContent('P509.macro');
export const P508Content = getMacroContent('P508.macro');
export const P510Content = getMacroContent('P510.macro');
export const P512Content = getMacroContent('P512.macro');
export const P301Content = getMacroContent('P301.macro');
export const P511Content = getMacroContent('P511.macro');
export const P999Content = getMacroContent('P999.macro');
export const P501Content = getMacroContent('P501.macro');
export const P504Content = getMacroContent('P504.macro');
export const P503Content = getMacroContent('P503.macro');
export const P901Content = getMacroContent('P901.macro');
export const P300Content = getMacroContent('P300.macro');
export const P507Content = getMacroContent('P507.macro');
export const P505Content = getMacroContent('P505.macro');
export const TCContent = getMacroContent('TC.macro');
export const P200Content = getMacroContent('P200.macro');

export const defaultATCIMacros: ATCIMacroConfig = {
    version: rawDefaultATCIMacros.version,
    sdVersion:
        rawDefaultATCIMacros.sdVersion ?? rawDefaultATCIMacros.version,
    variables: rawDefaultATCIMacros.variables,
    variableFile: rawDefaultATCIMacros.variableFile,
    macros: defaultMacros,
};
