export const onClick = (
    node: Node,
    handler: (this: Window, ev: MouseEvent) => void = () => {},
    capture = false
) => onMouse('click', node, handler, capture);
export const onMouse = (
    event: string,
    node: Node,
    handler: (this: Window, ev: MouseEvent) => void = () => {},
    capture = false
) => node.addEventListener(event, handler, capture);
