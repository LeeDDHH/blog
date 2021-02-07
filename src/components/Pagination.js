import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"

const Pagination = ({ pageContext }) => {
	const { previousPagePath, nextPagePath } = pageContext;
	return (
		<FlexBox>
			{
				previousPagePath
					? <PreviousPaginateButton><Link to={previousPagePath}>Prev</Link></PreviousPaginateButton>
					: null
			}
			{
				nextPagePath
					? <NextPaginateButton><Link to={nextPagePath}>Next</Link></NextPaginateButton>
					: null
			}
		</FlexBox>
	)
}

const FlexBox = styled.div`
	display: flex;
`

const PaginateButton = styled.div`
	width: 7rem;
	height: 3rem;
	margin: 0 auto;
	background-color: #005b99;
	border: 1px solid #005b99;
	border-radius: 5px;
	line-height: 3rem;

	>a {
		display: block;
		width: 100%;
		text-align: center;
		text-decoration: none;
		color: #ffffff;

		&:before, &:after {
			font-size: 14px;
		}

		&:hover {
			color: #e4e4e4;
		}
	}

	&:hover {
		background-color: #2d93d8;
		border-color: #2d93d8;
	}
`

const PreviousPaginateButton = styled(PaginateButton)`
	>a {
		&:before {
			content: "◀"
		}
	}
`

const NextPaginateButton = styled(PaginateButton)`
	>a {
		&:after {
			content: "▶"
		}
	}
`

export default Pagination
