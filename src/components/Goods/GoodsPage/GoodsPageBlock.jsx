import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Field, FieldArray} from "redux-form";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import {fetchGoods} from "../../../redux/actions/goods";
import {fetchTeachers} from "../../../redux/actions/teachers";

import {
    GoodsPageAddBlockBtn,
    RenderInput,
    RenderSelect,
    FieldFileInput,
} from "../../";

const GoodsPageBlockMain1Image = ({keyId, valueForm}) => {
    const [stateImg, setStateImg] = React.useState("");

    const urlGet = (input) => {
        if (typeof input !== "string" && input) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setStateImg(e.target.result);
            };

            reader.readAsDataURL(input);
        }
    };

    return (
        <>
            <Field component={FieldFileInput} name={`${keyId}.image`} />

            {urlGet(valueForm.image)}

            {stateImg !== "" ? (
                <div
                    className="img-placeholder"
                    style={{
                        backgroundImage: `url(${stateImg})`,
                    }}
                ></div>
            ) : (
                <div
                    className="img-placeholder"
                    style={{
                        backgroundImage: `url(${valueForm.image})`,
                    }}
                ></div>
            )}
        </>
    );
};

const GoodsPageBlockMain2Image = ({keyId, valueForm}) => {
    const [stateImg, setStateImg] = React.useState("");

    const urlGet = (input) => {
        if (typeof input !== "string" && input) {
            let reader = new FileReader();

            reader.onload = function (e) {
                setStateImg(e.target.result);
            };

            reader.readAsDataURL(input);
        }
    };

    return (
        <>
            <Field component={FieldFileInput} name={`${keyId}.image`} />

            {urlGet(valueForm.image)}

            {stateImg !== "" ? (
                <div
                    className="img-placeholder"
                    style={{
                        backgroundImage: `url(${stateImg})`,
                    }}
                ></div>
            ) : (
                <div
                    className="img-placeholder"
                    style={{
                        backgroundImage: `url(${valueForm.image})`,
                    }}
                ></div>
            )}
        </>
    );
};

const GoodsPageBlockSquares = ({fields}) => {
    const addBlock = () => {
        fields.push({type: "small"});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ???????? {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderSelect}
                        name={`${key}.type`}
                        choices={[
                            {
                                key: "small",
                                title: "??????????????????",
                            },
                            {
                                key: "big",
                                title: "??????????????",
                            },
                        ]}
                        className="goods-page-block__select"
                    />
                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.title`}
                        label="??????????????????"
                        className="goods-page-block__input"
                    />
                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.description`}
                        label="???????????????? ??????????"
                        className="goods-page-block__input"
                    />
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn addBlock={addBlock} />
            </div>
        </>
    );
};

const GoodsPageBlockSliderTextTabsItems = ({fields}) => {
    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`GoodsPageBlockSliderTextTabsItems-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ???????????? {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.text`}
                        label="??????????"
                        className="goods-page-block__input"
                    />
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ??????????????"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlockSliderTextTabs = ({fields}) => {
    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ?????? {parseFloat(index + 1)}
                        </h2>

                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.title`}
                        label="??????????????????"
                        className="goods-page-block__input"
                    />

                    <FieldArray
                        component={GoodsPageBlockSliderTextTabsItems}
                        name={`${key}.items`}
                    />
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn text="???????????????? ??????" addBlock={addBlock} />
            </div>
        </>
    );
};

const GoodsPageBlockModulesItem = ({fields}) => {
    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`GoodsPageBlockModulesItem-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ???????????? {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.title`}
                        label="??????????????????"
                        className="goods-page-block__input"
                    />

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.description`}
                        label="????????????????"
                        className="goods-page-block__input"
                    />
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ??????????????"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlockModules = ({fields, valueForm}) => {
    const dispatch = useDispatch();

    const {items} = useSelector(({goods}) => goods);

    React.useEffect(() => {
        if (!items.length) {
            dispatch(fetchGoods());
        }
    }, []);

    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ???????????? {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.title`}
                        label="??????????????????"
                        className="goods-page-block__input"
                    />

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.description`}
                        label="????????????????"
                        className="goods-page-block__input"
                    />

                    <FieldArray
                        component={GoodsPageBlockModulesItem}
                        name={`${key}.items`}
                    />

                    <Field
                        component={RenderSelect}
                        name={`${key}.goodModule`}
                        optionText="title"
                        optionValue="id"
                        label="?????????? ????????????"
                        choices={items}
                        className="goods-page-block__select"
                    />

                    <Field
                        component={RenderSelect}
                        name={`${key}.stockBoolean`}
                        label="??????????"
                        choices={[
                            {title: "??????", key: 0},
                            {title: "????", key: 1},
                        ]}
                        className="goods-page-block__select"
                    />

                    {valueForm.modules[index].stockBoolean === "1" ? (
                        <>
                            <Field
                                component={RenderSelect}
                                name={`${key}.goodModuleStock`}
                                optionText="title"
                                optionValue="id"
                                label="?????????? ??????????"
                                choices={items}
                                className="goods-page-block__select"
                            />

                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${key}.titleStock`}
                                label="??????????????????"
                                className="goods-page-block__input"
                            />

                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${key}.descriptionStock`}
                                label="????????????????"
                                className="goods-page-block__input"
                            />

                            <Field
                                component={RenderInput}
                                type="text"
                                name={`${key}.btnTextStock`}
                                label="????????????"
                                className="goods-page-block__input"
                            />
                        </>
                    ) : null}
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ????????????"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlockTeacher = ({fields}) => {
    const dispatch = useDispatch();

    const itemsTeacher = useSelector(({teachers}) => teachers.items);

    React.useEffect(() => {
        if (!itemsTeacher.length) {
            dispatch(fetchTeachers());
        }
    });

    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ?????????????????????????? {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderSelect}
                        name={`${key}`}
                        optionText="name"
                        optionValue="id"
                        choices={itemsTeacher}
                        className="goods-page-block__select"
                    />
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ??????????????????????????"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlockFeedbackPhotos = ({fields, valueForm}) => {
    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    const [stateImg, setStateImg] = React.useState([]);

    React.useEffect(() => {
        fields.map(() => {
            stateImg.push("");
        });

        setStateImg([...stateImg]);
    }, []);

    const urlGet = (input, index) => {
        if (input.name && !input.imageFeedback) {
            let reader = new FileReader();

            reader.onload = function (e) {
                stateImg[index] = e.target.result;

                setStateImg([...stateImg]);
            };

            reader.readAsDataURL(input);
        }
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ???????? (????????????) {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field component={FieldFileInput} name={`${key}`} />

                    {urlGet(valueForm.photos[index], index)}

                    {stateImg[index] !== "" ? (
                        <div
                            className="img-placeholder"
                            style={{
                                backgroundImage: `url(${stateImg[index]})`,
                            }}
                        ></div>
                    ) : (
                        <div
                            className="img-placeholder"
                            style={{
                                backgroundImage: `url(${valueForm.photos[index].imageFeedback})`,
                            }}
                        ></div>
                    )}
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ???????? (??????????)"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlockFeedbackVideos = ({fields, valueForm}) => {
    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    const [stateImg, setStateImg] = React.useState([]);

    React.useEffect(() => {
        fields.map(() => {
            stateImg.push("");
        });

        setStateImg([...stateImg]);
    }, []);

    const urlGet = (input, index) => {
        if (typeof input.videoCodePhoto === "object") {
            let reader = new FileReader();

            reader.onload = function (e) {
                stateImg[index] = e.target.result;

                setStateImg([...stateImg]);
            };

            reader.readAsDataURL(input.videoCodePhoto);
        }
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ?????????? (????????????) {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderInput}
                        type="text"
                        name={`${key}.videoCode`}
                        label="???????????????? id ?????????? ???? YouTube"
                        className="goods-page-block__input"
                    />

                    <Field
                        component={FieldFileInput}
                        name={`${key}.videoCodePhoto`}
                    />

                    {urlGet(valueForm.videos[index], index)}

                    {stateImg[index] !== "" ? (
                        <div
                            className="img-placeholder"
                            style={{
                                backgroundImage: `url(${stateImg[index]})`,
                            }}
                        ></div>
                    ) : (
                        <div
                            className="img-placeholder"
                            style={{
                                backgroundImage: `url(${valueForm.videos[index].videoCodePhoto})`,
                            }}
                        ></div>
                    )}
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ?????????? (??????????)"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlockGoods = ({fields}) => {
    const dispatch = useDispatch();

    const itemsGoods = useSelector(({goods}) => goods.items);

    React.useEffect(() => {
        if (!itemsGoods.length) {
            dispatch(fetchGoods());
        }
    });

    const addBlock = () => {
        fields.push({});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    return (
        <>
            {fields.map((key, index) => (
                <div
                    className="goods-page-subblock"
                    key={`goods-page-subblock-${key}-${index}`}
                >
                    <div className="goods-page-block-delete">
                        <h2 className="goods-page-subblock__title">
                            ?????????? {parseFloat(index + 1)}
                        </h2>
                        <span
                            className="goods-page-block__delete"
                            onClick={() => deleteBlock(index)}
                        >
                            ??????????????
                        </span>
                    </div>

                    <Field
                        component={RenderSelect}
                        name={`${key}`}
                        optionText="title"
                        optionValue="id"
                        choices={itemsGoods}
                        className="goods-page-block__select"
                    />
                </div>
            ))}

            <div className="goods-page-subblock-btn">
                <GoodsPageAddBlockBtn
                    text="???????????????? ??????????"
                    addBlock={addBlock}
                />
            </div>
        </>
    );
};

const GoodsPageBlock = ({fields, values}) => {
    const {pageCopy, pageCopyId} = useSelector(({goods}) => goods);

    React.useEffect(() => {
        fields.removeAll();

        pageCopy.map((item) => {
            fields.push(item);
        });
    }, [pageCopyId]);

    const addBlock = () => {
        fields.push({type: "main1"});
    };

    const deleteBlock = (index) => {
        fields.remove(index);
    };

    const makeOnDragEndFunction = (fields) => (result) => {
        if (!result.destination) {
            return;
        }

        fields.move(result.source.index, result.destination.index);
    };

    const blocks = [
        {title: "?????????????? 1", key: "main1"},
        {title: "?????????????? 1 (?? ??????????????????)", key: "main1-image"},
        {title: "?????????????? 2", key: "main2"},
        {title: "?????????????? 2 (?? ??????????????????)", key: "main2-image"},
        {title: "????????????????", key: "section-squares"},
        {title: "?????????????? ?? ??????????????", key: "slider-text"},
        {title: "???????????? ????????????????", key: "composition-product"},
        {title: "??????????????????????????", key: "teachers"},
        {title: "???????????? (????????)", key: "feedback-photos"},
        {title: "???????????? (??????????)", key: "feedback-videos"},
        {title: "????????????", key: "goods"},
    ];

    return (
        <>
            <DragDropContext onDragEnd={makeOnDragEndFunction(fields)}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                            {fields.map((key, index) => (
                                <Draggable
                                    key={key}
                                    draggableId={key}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            style={{
                                                userSelect: "none",
                                                padding: "25px 0 0 0",

                                                ...provided.draggableProps
                                                    .style,
                                            }}
                                        >
                                            <div
                                                className="goods-page-block"
                                                key={`goods-page-block-${key}-${index}`}
                                            >
                                                <h2 className="goods-page-subblock__title">
                                                    ???????? ????????????????
                                                </h2>
                                                <div className="goods-page-block-delete">
                                                    <span
                                                        className="goods-page-block__delete"
                                                        onClick={() =>
                                                            deleteBlock(index)
                                                        }
                                                    >
                                                        ??????????????
                                                    </span>
                                                </div>

                                                <div
                                                    className="goods-page-block-slider"
                                                    {...provided.dragHandleProps}
                                                >
                                                    <span className="goods-page-block__slider">
                                                        ??????????????????????
                                                    </span>
                                                </div>
                                                <Field
                                                    component={RenderSelect}
                                                    name={`${key}.type`}
                                                    choices={blocks}
                                                    label="?????? ??????????"
                                                    className="goods-page-block__select"
                                                    onChange={() =>
                                                        delete values.page[
                                                            index
                                                        ]
                                                    }
                                                />
                                                {values &&
                                                values.page[index].type ===
                                                    "main1" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.subtitle`}
                                                            label="????????????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.description`}
                                                            label="????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.btnText`}
                                                            label="????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "main1-image" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.subtitle`}
                                                            label="????????????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.description`}
                                                            label="????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.btnText`}
                                                            label="????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <GoodsPageBlockMain1Image
                                                            keyId={key}
                                                            valueForm={
                                                                values.page[
                                                                    index
                                                                ]
                                                            }
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "main2" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.subtitle`}
                                                            label="????????????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.description`}
                                                            label="????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="number"
                                                            name={`${key}.main2_id_awo`}
                                                            label="ID ???????????? ???? ??????????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.action`}
                                                            label="?????????????? ???????????????? ???????????????? 'action' ?? ???????? '<form>'"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.formId`}
                                                            label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formId'"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.formVc`}
                                                            label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formVc'"
                                                            className="goods-page-block__input"
                                                        />

                                                        <Field
                                                            component={
                                                                RenderSelect
                                                            }
                                                            name={`${key}.auto`}
                                                            label="????????"
                                                            choices={[
                                                                {
                                                                    title: "??????",
                                                                    key: 0,
                                                                },
                                                                {
                                                                    title: "????",
                                                                    key: 1,
                                                                },
                                                            ]}
                                                            className="goods-page-block__select"
                                                        />

                                                        {values.page[index]
                                                            .auto === "1" ? (
                                                            <Field
                                                                component={
                                                                    RenderInput
                                                                }
                                                                type="number"
                                                                name={`${key}.day`}
                                                                label="?????????? ?????????????? ???????? ???????????????? ??????????????????????"
                                                                className="goods-page-block__input"
                                                            />
                                                        ) : null}

                                                        <Field
                                                            component={
                                                                RenderSelect
                                                            }
                                                            name={`${key}.range`}
                                                            label="????????????????"
                                                            choices={[
                                                                {
                                                                    title: "??????",
                                                                    key: 0,
                                                                },
                                                                {
                                                                    title: "????",
                                                                    key: 1,
                                                                },
                                                            ]}
                                                            className="goods-page-block__select"
                                                        />

                                                        {values.page[index]
                                                            .range === "1" ? (
                                                            <>
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="datetime-local"
                                                                    name={`${key}.minDate`}
                                                                    label="??"
                                                                    className="goods-page-block__input"
                                                                />
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="datetime-local"
                                                                    name={`${key}.maxDate`}
                                                                    label="????"
                                                                    className="goods-page-block__input"
                                                                />
                                                            </>
                                                        ) : (
                                                            <Field
                                                                component={
                                                                    RenderInput
                                                                }
                                                                type="datetime-local"
                                                                name={`${key}.date`}
                                                                label="???????? ?? ?????????? ????????????????????"
                                                                className="goods-page-block__input"
                                                            />
                                                        )}
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "main2-image" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.subtitle`}
                                                            label="????????????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.description`}
                                                            label="????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="number"
                                                            name={`${key}.main2_id_awo`}
                                                            label="ID ???????????? ???? ??????????????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.action`}
                                                            label="?????????????? ???????????????? ???????????????? 'action' ?? ???????? '<form>'"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.formId`}
                                                            label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formId'"
                                                            className="goods-page-block__input"
                                                        />
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.formVc`}
                                                            label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formVc'"
                                                            className="goods-page-block__input"
                                                        />

                                                        <Field
                                                            component={
                                                                RenderSelect
                                                            }
                                                            name={`${key}.auto`}
                                                            label="????????"
                                                            choices={[
                                                                {
                                                                    title: "??????",
                                                                    key: 0,
                                                                },
                                                                {
                                                                    title: "????",
                                                                    key: 1,
                                                                },
                                                            ]}
                                                            className="goods-page-block__select"
                                                        />

                                                        {values.page[index]
                                                            .auto === "1" ? (
                                                            <Field
                                                                component={
                                                                    RenderInput
                                                                }
                                                                type="number"
                                                                name={`${key}.day`}
                                                                label="?????????? ?????????????? ???????? ???????????????? ??????????????????????"
                                                                className="goods-page-block__input"
                                                            />
                                                        ) : null}

                                                        <Field
                                                            component={
                                                                RenderSelect
                                                            }
                                                            name={`${key}.range`}
                                                            label="????????????????"
                                                            choices={[
                                                                {
                                                                    title: "??????",
                                                                    key: 0,
                                                                },
                                                                {
                                                                    title: "????",
                                                                    key: 1,
                                                                },
                                                            ]}
                                                            className="goods-page-block__select"
                                                        />

                                                        {values.page[index]
                                                            .range === "1" ? (
                                                            <>
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="datetime-local"
                                                                    name={`${key}.minDate`}
                                                                    label="??"
                                                                    className="goods-page-block__input"
                                                                />
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="datetime-local"
                                                                    name={`${key}.maxDate`}
                                                                    label="????"
                                                                    className="goods-page-block__input"
                                                                />
                                                            </>
                                                        ) : (
                                                            <Field
                                                                component={
                                                                    RenderInput
                                                                }
                                                                type="datetime-local"
                                                                name={`${key}.date`}
                                                                label="???????? ?? ?????????? ????????????????????"
                                                                className="goods-page-block__input"
                                                            />
                                                        )}

                                                        <GoodsPageBlockMain2Image
                                                            keyId={key}
                                                            valueForm={
                                                                values.page[
                                                                    index
                                                                ]
                                                            }
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "section-squares" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockSquares
                                                            }
                                                            name={`${key}.squares`}
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "slider-text" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockSliderTextTabs
                                                            }
                                                            name={`${key}.tabs`}
                                                        />

                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.btnText`}
                                                            label="????????????"
                                                            className="goods-page-block__input"
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "composition-product" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockModules
                                                            }
                                                            name={`${key}.modules`}
                                                            valueForm={
                                                                values.page[
                                                                    index
                                                                ]
                                                            }
                                                        />

                                                        <Field
                                                            component={
                                                                RenderSelect
                                                            }
                                                            name={`${key}.formBoolean`}
                                                            label="??????????"
                                                            choices={[
                                                                {
                                                                    title: "??????",
                                                                    key: 0,
                                                                },
                                                                {
                                                                    title: "????",
                                                                    key: 1,
                                                                },
                                                            ]}
                                                            className="goods-page-block__select"
                                                        />

                                                        {values.page[index]
                                                            .formBoolean ===
                                                        "1" ? (
                                                            <>
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="text"
                                                                    name={`${key}.form_id_awo`}
                                                                    label="ID ???????????? ???? ??????????????????????"
                                                                    className="goods-page-block__input"
                                                                />
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="text"
                                                                    name={`${key}.action`}
                                                                    label="?????????????? ???????????????? ???????????????? 'action' ?? ???????? '<form>'"
                                                                    className="goods-page-block__input"
                                                                />
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="text"
                                                                    name={`${key}.formId`}
                                                                    label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formId'"
                                                                    className="goods-page-block__input"
                                                                />
                                                                <Field
                                                                    component={
                                                                        RenderInput
                                                                    }
                                                                    type="text"
                                                                    name={`${key}.formVc`}
                                                                    label="?????????????? ???????????????? ???????????????? 'value' ?? ???????? '<input>' ?? 'name=formVc'"
                                                                    className="goods-page-block__input"
                                                                />
                                                            </>
                                                        ) : null}
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "teachers" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockTeacher
                                                            }
                                                            name={`${key}.auth`}
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "feedback-photos" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockFeedbackPhotos
                                                            }
                                                            name={`${key}.photos`}
                                                            valueForm={
                                                                values.page[
                                                                    index
                                                                ]
                                                            }
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "feedback-videos" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockFeedbackVideos
                                                            }
                                                            name={`${key}.videos`}
                                                            valueForm={
                                                                values.page[
                                                                    index
                                                                ]
                                                            }
                                                        />
                                                    </>
                                                ) : null}
                                                {values &&
                                                values.page[index].type ===
                                                    "goods" ? (
                                                    <>
                                                        <Field
                                                            component={
                                                                RenderInput
                                                            }
                                                            type="text"
                                                            name={`${key}.title`}
                                                            label="??????????????????"
                                                            className="goods-page-block__input"
                                                        />

                                                        <FieldArray
                                                            component={
                                                                GoodsPageBlockGoods
                                                            }
                                                            name={`${key}.goods`}
                                                        />
                                                    </>
                                                ) : null}
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <div className="goods-page-bottom-btn">
                <GoodsPageAddBlockBtn addBlock={addBlock} />

                <button type="submit" className="btn goods-page-bottom__btn">
                    ??????????????????
                </button>
            </div>
        </>
    );
};

export default GoodsPageBlock;
