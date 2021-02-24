/**
 * This is just a simple test component from the Storybook docs to ensure
 * storybook is working as expected.
 */

import React from "react";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
