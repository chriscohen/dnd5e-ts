export interface ArmorClassSource {
    modifier?: number;
    source?: string; // For now.
}

export function createArmorClassSource(data: ArmorClassSource = {}): ArmorClassSource {
    const _modifier = data.modifier ?? 0;
    const _source = data.source;

    return {
        modifier: _modifier,
        source: _source
    }
}
