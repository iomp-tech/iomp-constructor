import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {fetchTimetable} from "../../redux/actions/timetable";

import {PreloaderPage, TimetableSearch, TimetableNotFound} from "../";

const TimetableList = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({timetable}) => timetable);

    React.useEffect(() => {
        if (!items.length) {
            dispatch(fetchTimetable());
        }
    }, []);

    return (
        <div className="goods-list">
            <div className="container">
                <div className="goods-list-wrapper">
                    <TimetableSearch />

                    {isLoaded ? (
                        items.length ? (
                            items.map((item, index) => (
                                <Link
                                    className="goods-list-item"
                                    to={`/timetable/${item.id}`}
                                    key={`goods-list-item-${index}`}
                                >
                                    <p className="goods-list-item__title">
                                        {item.title}{" "}
                                        <span>
                                            (Количество блоков:{" "}
                                            {item.page ? item.page.length : 0})
                                        </span>
                                    </p>
                                    <div className="goods-list-item-arrow">
                                        <svg
                                            width="50"
                                            height="25"
                                            viewBox="0 0 50 25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M50.0002 12.5007C50.0005 12.6754 49.9313 12.843 49.8076 12.9667L37.9397 24.8152C37.6778 25.0678 37.2604 25.0605 37.0074 24.799C36.7606 24.5439 36.7606 24.1395 37.0074 23.8845L48.4085 12.5007L37.0074 1.11824C36.7544 0.856768 36.7617 0.440031 37.0235 0.187449C37.2791 -0.0589638 37.6841 -0.0589638 37.9397 0.187449L49.8076 12.036C49.9309 12.1593 50.0001 12.3264 50.0002 12.5007Z" />
                                            <path d="M50 12.4328C50 12.7942 49.5336 13.0872 48.9583 13.0872L1.0417 13.0872C0.466406 13.0871 0 12.7942 0 12.4328C0 12.0714 0.466406 11.7784 1.0417 11.7784L48.9584 11.7784C49.5336 11.7784 50 12.0714 50 12.4328Z" />
                                        </svg>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <TimetableNotFound />
                        )
                    ) : (
                        <PreloaderPage />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TimetableList;
