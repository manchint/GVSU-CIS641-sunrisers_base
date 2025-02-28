import React, { useEffect } from "react";
const TagsInput = props => {
  const [tags, setTags] = React.useState(props.tags);
  const removeTags = indexToRemove => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  useEffect(() => {
    setTags(props.tags)
  }, [props.tag])
  return (
    <div className="tags-input">
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className='tag-title'>{tag}</span>
            <span className='tag-close-icon'
              onClick={() => removeTags(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={event => event.key === "," ? addTags(event) : null}
        placeholder="Add , to add tags"
      />
    </div>
  );
};
export default TagsInput;