// src/components/common/EmptyState.tsx
export const EmptyState = ({ message = "No data found" }: { message?: string }) => (
  <div className="text-center p-10 border-2 border-dashed rounded-lg text-gray-500">
    <p>{message}</p>
  </div>
);