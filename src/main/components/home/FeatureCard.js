import React, { Fragment } from "react";
import PropTypes from "prop-types";
// import { Typography, withStyles, List, ListItem, ListItemText } from "@material-ui/core";
import { Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  iconWrapper: {
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1) * 1.5
  }
});

function shadeColor(hex, percent) {
  const f = parseInt(hex.slice(1), 16);

  const t = percent < 0 ? 0 : 255;

  const p = percent < 0 ? percent * -1 : percent;

  const R = f >> 16;

  const G = (f >> 8) & 0x00ff;

  const B = f & 0x0000ff;
  return `#${(
    0x1000000 +
    (Math.round((t - R) * p) + R) * 0x10000 +
    (Math.round((t - G) * p) + G) * 0x100 +
    (Math.round((t - B) * p) + B)
  )
    .toString(16)
    .slice(1)}`;
}

function FeatureCard(props) {
  const { classes, Icon, color, headline, text, data, subtitle } = props;
  return (
    <Fragment>
      <div
        // We will set color and fill here, due to some prios complications
        className={classes.iconWrapper}
        style={{
          borderRadius: "50%",
          color: color,
          backgroundColor: shadeColor(color, 0.5),
          fill: color
        }}
      >
        {Icon}
      </div>
      { (subtitle) &&
        (<div>
        <Typography variant="h5">
          {headline}
        </Typography>

        <Typography variant="h6" color="textSecondary" paragraph>
          {subtitle}
        </Typography>
        </div>)
      }
      { (!subtitle) &&
        (<Typography variant="h5" paragraph>
          {headline}
        </Typography>)
      }
      <Typography variant="body1" color="textSecondary" style={{"white-space": "pre-line"}}>
        {text}
      </Typography>
      { (data && 'link' in data) &&
          (<Typography variant="body1" color="textSecondary">
            <a href={data.link[1]} target="_blank" rel="noopener noreferrer">{data.link[0]}</a>
          </Typography>)
      }
      <ul>
        { (data && 'items' in data) &&
          data.items.map(text => (
            <li>
              <Typography variant="body1" color="textSecondary" style={{"white-space": "pre-line"}}>
                {text}
              </Typography>
            </li>
          ))
        }
      </ul>
    </Fragment>
  );
}

FeatureCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(FeatureCard);
