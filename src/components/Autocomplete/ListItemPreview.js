import React from "react";
import PropTypes from "prop-types";

export function ListItemPreview({ preview, components }) {
  return (
    <ul>
      <li>
        <components.Highlight hit={preview} attribute="content" />
      </li>
      <li>...</li>
    </ul>
  );
}

ListItemPreview.propTypes = {
  preview: PropTypes.node.isRequired,
  components: PropTypes.node.isRequired,
};
