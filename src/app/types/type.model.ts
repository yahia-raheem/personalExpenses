export interface TypeModel extends TypeModelSnapshot{
    id: string,
}

export interface TypeModelSnapshot {
    title: string,
    isInward: boolean,
}