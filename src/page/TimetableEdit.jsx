import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {format} from "date-fns";

import {fetchTimetableById} from "../redux/actions/timetable";
import {fetchUser} from "../redux/actions/user";

import {API_DOMEN} from "../api";

import {
    PreloaderPage,
    TimetableNotFound,
    TimetablePageTop,
    TimetablePageForm,
} from "../components/";

const TimetableEdit = ({match}) => {
    const dispatch = useDispatch();

    const {isLoadedById, itemById} = useSelector(({timetable}) => timetable);
    const {isLoaded, isLogin} = useSelector(({user}) => user);

    React.useEffect(() => {
        dispatch(fetchTimetableById(match.params.id));

        if (!isLogin) {
            dispatch(fetchUser());
        }
    }, []);

    const onSubmit = (dataForm) => {
        let formData = new FormData();

        for (let key in dataForm) {
            if (key === "page") {
                for (let key2 in dataForm[key]) {
                    if (dataForm[key][key2].type === "feedback-photos") {
                        if (dataForm[key][key2].photos) {
                            for (let key3 in dataForm[key][key2].photos) {
                                formData.append(
                                    "imageFeedback-" + key3,
                                    dataForm[key][key2].photos[key3]
                                );
                            }
                        }
                    }

                    if (dataForm[key][key2].type === "feedback-videos") {
                        if (dataForm[key][key2].videos) {
                            for (let key3 in dataForm[key][key2].videos) {
                                formData.append(
                                    "imageFeedbackVideo-" + key3,
                                    dataForm[key][key2].videos[key3]
                                        .videoCodePhoto
                                );
                            }
                        }
                    }

                    if (dataForm[key][key2].type === "main2") {
                        if (parseInt(dataForm[key][key2].range)) {
                            delete dataForm[key][key2].date;
                        } else {
                            delete dataForm[key][key2].minDate;
                            delete dataForm[key][key2].maxDate;
                        }
                    }

                    if (dataForm[key][key2].type === "composition-product") {
                        if (!parseInt(dataForm[key][key2].formBoolean)) {
                            delete dataForm[key][key2].form_id_awo;
                            delete dataForm[key][key2].action;
                            delete dataForm[key][key2].formId;
                            delete dataForm[key][key2].formVc;
                        }
                    }
                }

                formData.append("page", JSON.stringify(dataForm[key]));
            } else if (key === "id_awo_courses") {
                formData.append(
                    "id_awo_courses",
                    JSON.stringify(dataForm[key])
                );
            } else if (
                key === "date" ||
                key === "dateDelete" ||
                key === "minDate" ||
                key === "maxDate"
            ) {
                formData.append(
                    key,
                    format(dataForm[key], "yyyy-MM-dd, HH:mm")
                );
            } else if (key === "content") {
                formData.append("content", JSON.stringify(dataForm[key]));

                for (let key2 in dataForm[key]) {
                    if (dataForm[key][key2].file) {
                        formData.append(
                            "file-" + key2,
                            dataForm[key][key2].file.rawFile
                        );
                    }
                }
            } else {
                formData.append(key, dataForm[key]);
            }
        }

        formData.append("_method", "PUT");

        const token = sessionStorage.getItem("success-token");

        axios
            .post(`${API_DOMEN}/timetable/${match.params.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(({data}) => {
                window.location.reload();
            })
            .catch(() => {
                return false;
            });
    };

    return (
        <div className="goods-page">
            <div className="container">
                {isLoaded ? (
                    isLogin ? (
                        isLoadedById ? (
                            Object.keys(itemById).length ? (
                                <>
                                    <TimetablePageTop {...itemById} />

                                    <TimetablePageForm
                                        onSubmit={onSubmit}
                                        page={itemById.page}
                                    />
                                </>
                            ) : (
                                <TimetableNotFound />
                            )
                        ) : (
                            <PreloaderPage />
                        )
                    ) : (
                        (window.location.href = "/login")
                    )
                ) : (
                    <PreloaderPage />
                )}
            </div>
        </div>
    );
};

export default TimetableEdit;
