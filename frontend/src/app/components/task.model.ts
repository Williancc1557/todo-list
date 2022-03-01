export interface Task {
  id?: number;

  name?: string;

  description?: string;

  finished?: boolean;
}

export interface RequestResponse {
  statusCode: number;
  body: Array<Task>
}
