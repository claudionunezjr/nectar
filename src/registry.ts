import Framework from '@framework';
import { NodeTemplateFunction } from '@framework/types';

let registered = null;

export const Registry = () => {
    return registered || setRegistered();

    function setRegistered() {
        registered = Framework.Settings.registry
            ? new Map<string, NodeTemplateFunction>(
                  Object.entries(Framework.Settings.registry)
              )
            : new Map();

        return registered;
    }
};
