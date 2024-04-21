import * as React from 'react';

import { Link, HeadFC, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<>
			Sorry 😔, we couldn’t find what you were looking for.
			<br />
			{process.env.NODE_ENV === 'development' ? (
				<>
					<br />
					Try creating a page in <code>src/pages/</code>.
					<br />
				</>
			) : null}
			<br />
			<Link to='/'>Go home</Link>.
		</>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
