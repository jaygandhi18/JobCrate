import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);

    return (
        <div className="max-w-7xl mx-auto my-20 text-[#E2E8F0]">
            <h1 className="text-4xl font-bold">
                <span className="text-[#38BDF8]">Recent & Top </span>  Openings
            </h1>
            <div className="grid grid-cols-3 gap-4 my-5">
                {
                    allJobs.length <= 0
                        ? <span>No Job Available</span>
                        : allJobs.slice(0, 6).map((job) => (
                            <LatestJobCards key={job._id} job={job} />
                        ))
                }
            </div>
        </div>
    );
};

export default LatestJobs;
