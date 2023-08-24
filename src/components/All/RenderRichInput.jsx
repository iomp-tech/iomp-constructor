import React, {Component} from "react";
import RichTextEditor from "react-rte";

class RenderRichInput extends Component {
    state = {
        value:
            this.props.input.value === ""
                ? RichTextEditor.createEmptyValue()
                : RichTextEditor.createValueFromString(
                      this.props.input.value,
                      "html"
                  ),
    };

    onChange = (value) => {
        this.setState({value});

        this.props.input.onChange(value.toString("html"));

        if (this.props.onChange) {
            this.props.onChange(value.toString("html"));
        }
    };

    render() {
        return (
            <div className="rich">
                <span className="rich__label">{this.props.label}</span>

                <RichTextEditor
                    value={this.state.value}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}

export default RenderRichInput;
