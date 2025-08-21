import { toast } from "sonner";

interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  requiredPlan?: string;
  code?: string;
}

export async function handleApiResponse<T>(
  response: Response
): Promise<T | null> {
  const json = (await response.json()) as ApiResponse<T>;

  if (!response.ok) {
    if (response.status === 401) {
      if (
        json?.code === 'INVALID_CREDENTIALS' ||
        json?.code === 'INVALID_INPUT'
      ) {
        toast.error(json?.error);
        return null;
      }

      toast.error('Please sign in to continue');
      return null;
    }

    if (response.status === 403 && json.requiredPlan) {
      toast.error(`This feature requires a ${json.requiredPlan} subscription`, {
        description: 'Please upgrade your plan to access this feature.',
        action: {
          label: 'Upgrade',
          onClick: () => (window.location.href = '/billing'),
        },
      });
      return null;
    }

    toast.error(json.error || 'Something went wrong');
    return null;
  }

  if (json.data === null) {
    toast.error('Something went wrong');
    return null;
  }

  return (json.data || json) as T;
}

export function showSuccessToast(
  message: string,
  description?: string,
  action?: { label: string; onClick: () => void }
) {
  toast.success(message, {
    description,
    action,
  });
}

export function showErrorToast(
  message: string,
  description?: string,
  action?: { label: string; onClick: () => void }
) {
  toast.error(message, {
    description,
    action,
  });
}

export function showLoadingToast(
  message: string,
  promise: Promise<any>,
  options: {
    loading: string;
    success: string;
    error: string;
  }
) {
  return toast.promise(promise, {
    loading: options.loading,
    success: options.success,
    error: options.error,
  });
}
