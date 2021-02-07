import { Link } from "gatsby"
import React from "react"

const Pagination = ({ pageContext }) => {
	const { previousPagePath, nextPagePath } = pageContext;
	return (
		<div>
			{
				previousPagePath
					? <Link to={previousPagePath}>前のページ</Link>
					: null
			}
			{
				nextPagePath
					? <Link to={nextPagePath}>次のページ</Link>
					: null
			}
		</div>
	)
}

export default Pagination
