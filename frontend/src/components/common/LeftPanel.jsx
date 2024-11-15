import { Link } from "react-router-dom";
// import RightPanelSkeleton from "../skeletons/RightPanelSkeleton";
import { USERS_FOR_LEFT_PANEL } from "../../utils/db/dummy";

const LeftPanel = () => {
	const isLoading = false;

	return (
		<div className='hidden lg:block my-4 mx-2'>
			<div className='bg-[#a6b3ce] p-4 rounded-md sticky top-2'>
				<p className='font-bold'>Follow to extend your circle.</p>
				<div className='flex flex-col gap-4'>
					{!isLoading &&
						USERS_FOR_LEFT_PANEL?.map((user) => (
							<Link
								to={`/profile/${user.username}`}
								className='flex items-center justify-between gap-4'
								key={user._id}
							>
								<div className='flex gap-2 items-center'>
									<div className='avatar'>
										<div className='w-20 rounded-full'>
											<img src={user.profileImg || "/avatar-placeholder.png"} />
										</div>
									</div>
									<div className='flex flex-col'>
										<span className='font-semibold tracking-tight truncate w-28'>
											{user.fullName}
										</span>
										<span className='text-sm text-slate-500'>@{user.username}</span>
									</div>
								</div>
								<div>
									<button
										className='btn bg-white text-black hover:bg-white hover:opacity-90 rounded-full btn-sm'
										onClick={(e) => e.preventDefault()}
									>
										Follow
									</button>
								</div>
							</Link>
						))}
				</div>
			</div>
		</div>
	);
};
export default LeftPanel;