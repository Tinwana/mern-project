import { useMutation } from "@tanstack/react-query";

const useMutationHook = (callbackService) => {
  const mutation = useMutation({
    mutationFn: callbackService,
  });
  return mutation;
};

export { useMutationHook };
