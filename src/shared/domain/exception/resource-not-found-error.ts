class ResourceNotFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export default ResourceNotFoundError;
