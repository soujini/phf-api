import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles } from "@material-ui/core/styles";
import { TextField, CircularProgress } from "@material-ui/core";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

/**
 * Auto Suggest Component with pre populated options on text input
 * @param {*} props
 */

const CustomAutocomplete = props => {
  return (
    <Autocomplete
      {...props}
      renderInput={params => (
        <TextField
          {...params}
          margin="normal"
          fullWidth
          placeholder={props.placeholder}
          onChange={props.onTextChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {props.loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                className={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
};

export default CustomAutocomplete;
