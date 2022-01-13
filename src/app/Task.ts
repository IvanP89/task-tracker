export interface Task {
    
    id?: number;
    text: string;
    day: string;
    reminder: boolean;

}

export const UNINITIALIZED_TASK: Task = {
    id: -1,
    text: "uninitialized",
    day: "uninitialized",
    reminder: false
};