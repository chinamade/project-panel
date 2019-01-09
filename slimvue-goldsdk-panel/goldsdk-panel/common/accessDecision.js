import slimvue from 'slimvue';

export function gamePolicy() {
    return ((slimvue.bridge.games) instanceof Array && (slimvue.bridge.games).length === 0);
}

export function isDevRole() {
    return slimvue.bridge.is_dev_user;
}

export function panelDomain() {
    return slimvue.bridge.panel_domain;
}
