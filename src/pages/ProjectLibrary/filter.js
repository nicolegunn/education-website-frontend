const filters = {
  course: ["beginner", "intermediate", "advanced"],
  subscription: ["free", "premium"],
  activity_type: ["animation", "game", "chatbot", "augmented reality"],
  year_level: ["1-4", "5-6", "7-8", "9-13"],
  subject_matter: [
    "computer science",
    "maths",
    "science",
    "language",
    "art",
    "music",
  ],
};

const initialFilters = {
  pages: [],
  course: [],
  subscription: [],
  activity_type: [],
  year_level: [],
  subject_matter: [],
};

//This function creates an object of filters that can then be applied to the projects array using the filterProjects function.
function createFilter(existingFiltersObject, id, name, selected) {
  let value = id.toLowerCase();
  let newFiltersObject = { ...existingFiltersObject };

  //The switch statement updates the filterObjCopy to include or remove filters based on the selected or unselected filter
  switch (name) {
    case "pages":
      //No filter is applied if "all" is selected
      value === "all"
        ? (newFiltersObject.pages = [])
        : (newFiltersObject.pages[0] = Number(value));
      break;
    case "course":
      //Only one course type can be selected at a time
      newFiltersObject.course[0] = value;
      break;
    case "year_level":
      //Converts the selected range of year levels into separate array items
      const min = Number(id[0]);
      const max = Number(id.slice(2));
      value = [...Array(max - min + 1).keys()].map((key) => key + min);
      selected
        ? newFiltersObject.year_level.push(...value)
        : (newFiltersObject.year_level = newFiltersObject.year_level.filter(
            (num) => value.indexOf(num) < 0
          ));
      break;
    //default will run for the remaining three filter options: subscription, activity_type and subject_matter
    default:
      selected
        ? newFiltersObject[name].push(value)
        : (newFiltersObject[name] = newFiltersObject[name].filter(
            (item) => item !== value
          ));
  }

  return newFiltersObject;
}

//This function applies an object of filters to an array of projects
function filterProjects(filterObj, projectsArray) {
  let newFilteredProjects = [];
  const activeFilters = {};
  const filterKeys = Object.keys(filterObj);
  //Adds active filters to the activeFilters object, which was originally initialized as an empty object
  for (let key of filterKeys) {
    if (filterObj[key].length !== 0) {
      activeFilters[key] = filterObj[key];
    }
  }

  for (let project of projectsArray) {
    let include = true;
    for (let key in activeFilters) {
      if (key !== "pages") {
        if (!filterObj[key].includes(project[key])) {
          include = false;
        }
      }
    }
    if (include) {
      newFilteredProjects.push(project);
    }
  }
  console.log(newFilteredProjects);

  if (filterObj.pages.length > 0) {
    newFilteredProjects = newFilteredProjects.splice(0, filterObj.pages[0]);
  }
  return newFilteredProjects;
}

export { filters, initialFilters, createFilter, filterProjects };
