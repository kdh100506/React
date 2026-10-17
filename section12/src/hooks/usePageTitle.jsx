import { use, useEffect } from "react";

function usePageTitle(title) {
  useEffect(() => {
    const $title = document.getElementsByTagName('title')[0];
    $title.innerText = title;
  }, [title]);
}

export default usePageTitle;