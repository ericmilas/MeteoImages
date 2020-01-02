import React from 'react';

const ImageScore = (props) => {
    const {ups, downs} = props;  //Same as ups = props.ups; downs = props.downs;
    const upsPercent = `${100 * (ups/(ups + downs))}%`;  //These are special quotes (left of 1 on the keyboard, not sure what that means specifically yet
    const downsPercent = `${100 * (downs/(ups + downs))}%`;

    return (
        <div>
            Ups/Downs
            <div className="progress">
                <div style={{width: upsPercent}} className="progress-bar progress-bar-success progress-bar-striped"/>
                <div style={{width: downsPercent}} className="progress-bar progress-bar-danger progress-bar-striped"/>
            </div>
        </div>
    );
};

export default ImageScore;