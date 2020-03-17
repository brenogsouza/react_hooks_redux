export const ADD_COURSE = "[ADD_COURSE] ADD_COURSE";

export default function addCourseAction(title) {
  return {
    type: "ADD_COURSE",
    title
  };
}
