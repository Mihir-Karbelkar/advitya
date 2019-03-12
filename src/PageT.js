import React from "react";
import "babel-polyfill";
import PropTypes from "prop-types";
import _ from "lodash";
import $ from "jquery";

const previousTouchMove = Symbol();
const scrolling = Symbol();
const wheelScroll = Symbol();
const touchMove = Symbol();
const keyPress = Symbol();
const onWindowResized = Symbol();
const addNextComponent = Symbol();
export const scrollWindowUp = Symbol();
export const scrollWindowDown = Symbol();
const setRenderComponents = Symbol();

const ANIMATION_TIMER = 200;
const KEY_UP = 38;
const KEY_DOWN = 40;

export default class PageT extends React.Component {
  static propTypes = {
    animationTimer: PropTypes.number,
    transitionTimingFunction: PropTypes.string,
    pageOnChange: PropTypes.func,
    scrollUnavailable: PropTypes.func,
    containerHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    containerWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    blockScrollUp: PropTypes.bool,
    blockScrollDown: PropTypes.bool
  };

  static defaultProps = {
    animationTimer: 1000,
    transitionTimingFunction: "ease-in-out",
    containerHeight: "100vh",
    containerWidth: "100vw",
    blockScrollUp: false,
    blockScrollDown: false
  };

  constructor(props) {
    super(props);
    this.state = { componentIndex: 0, componentsToRenderLength: 0 };
    this[previousTouchMove] = null;
    this[scrolling] = false;
  }

  componentDidMount = () => {
    window.addEventListener("resize", this[onWindowResized]);

    document.ontouchmove = event => {
      event.preventDefault();
    };

    this._pageContainer.addEventListener("touchmove", this[touchMove]);
    this._pageContainer.addEventListener("keydown", this[keyPress]);

    let componentsToRenderLength = 0;

    if (!_.isNil(this.props.children[this.state.componentIndex])) {
      componentsToRenderLength++;
    } else {
      componentsToRenderLength++;
    }

    this[addNextComponent](componentsToRenderLength);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this[onWindowResized]);

    this._pageContainer.removeEventListener("touchmove", this[touchMove]);
    this._pageContainer.removeEventListener("keydown", this[keyPress]);
  };

  goToPage = number => {
    const { pageOnChange, children } = this.props;
    const { componentIndex, componentsToRenderLength } = this.state;

    let newComponentsToRenderLength = componentsToRenderLength;

    if (!_.isEqual(componentIndex, number)) {
      if (!_.isNil(this["container_" + number]) && !this[scrolling]) {
        this[scrolling] = true;
        this._pageContainer.style.transform = `translate3d(0, ${number *
          -100}%, 0)`;

        if (pageOnChange) {
          pageOnChange(number + 1);
        }

        if (
          _.isNil(this["container_" + (number + 1)]) &&
          !_.isNil(children[number + 1])
        ) {
          newComponentsToRenderLength++;
        }

        setTimeout(() => {
          this.setState(
            {
              componentIndex: number,
              componentsToRenderLength: newComponentsToRenderLength
            },
            () => {
              this[scrolling] = false;
              this[previousTouchMove] = null;
            }
          );
        }, this.props.animationTimer + ANIMATION_TIMER);
      } else if (!this[scrolling] && !_.isNil(children[number])) {
        for (let i = componentsToRenderLength; i <= number; i++) {
          newComponentsToRenderLength++;
        }

        if (!_.isNil(children[number + 1])) {
          newComponentsToRenderLength++;
        }

        this[scrolling] = true;
        this.setState(
          {
            componentsToRenderLength: newComponentsToRenderLength
          },
          () => {
            this._pageContainer.style.transform = `translate3d(0, ${number *
              -100}%, 0)`;

            if (pageOnChange) {
              pageOnChange(number + 1);
            }

            setTimeout(() => {
              this.setState({ componentIndex: number }, () => {
                this[scrolling] = false;
                this[previousTouchMove] = null;
              });
            }, this.props.animationTimer + ANIMATION_TIMER);
          }
        );
      }
    }
  };

  render() {
    const {
      animationTimer,
      transitionTimingFunction,
      containerHeight,
      containerWidth
    } = this.props;

    return (
      <div
        style={{
          height: containerHeight,
          width: containerWidth,
          overflow: "hidden"
        }}
      >
        <div
          ref={c => (this._pageContainer = c)}
          onWheel={this[wheelScroll]}
          style={{
            height: "100%",
            width: "100%",
            transition: `transform ${animationTimer}ms ${transitionTimingFunction}`
          }}
          tabIndex={0}
        >
          {this[setRenderComponents]()}
        </div>
      </div>
    );
  }

  [wheelScroll] = event => {
    if (event.deltaY < 0) {
      this[scrollWindowUp]();
      $("#active")
        .children()
        .children()
        .addClass("hide");
    } else {
      this[scrollWindowDown]();
      if (
        this.state.componentIndex + 1 ==
        this.state.componentsToRenderLength
      ) {
      } else {
        $("#active")
          .children()
          .children()
          .addClass("hide");
      }
    }
  };

  [touchMove] = event => {
    if (!_.isNull(this[previousTouchMove])) {
      if (event.touches[0].clientY > this[previousTouchMove]) {
        this[scrollWindowUp]();
        $("#active")
          .children()
          .children()
          .addClass("hide");
      } else {
        this[scrollWindowDown]();
        if (
          this.state.componentIndex + 1 ==
          this.state.componentsToRenderLength
        ) {
        } else {
          $("#active")
            .children()
            .children()
            .addClass("hide");
        }
      }
    } else {
      this[previousTouchMove] = event.touches[0].clientY;
    }
  };

  [keyPress] = event => {
    if (_.isEqual(event.keyCode, KEY_UP)) {
      this[scrollWindowUp]();
      $("#active")
        .children()
        .children()
        .addClass("hide");
    }
    if (_.isEqual(event.keyCode, KEY_DOWN)) {
      this[scrollWindowDown]();
      if (
        this.state.componentIndex + 1 ==
        this.state.componentsToRenderLength
      ) {
      } else {
        $("#active")
          .children()
          .children()
          .addClass("hide");
      }
    }
  };

  [onWindowResized] = () => {
    this.forceUpdate();
  };

  [addNextComponent] = componentsToRenderOnMountLength => {
    let componentsToRenderLength = 0;

    if (!_.isNil(componentsToRenderOnMountLength)) {
      componentsToRenderLength = componentsToRenderOnMountLength;
    }

    componentsToRenderLength = Math.max(
      componentsToRenderLength,
      this.state.componentsToRenderLength
    );

    if (componentsToRenderLength <= this.state.componentIndex + 1) {
      if (!_.isNil(this.props.children[this.state.componentIndex + 1])) {
        componentsToRenderLength++;
      }
    }

    this.setState({
      componentsToRenderLength
    });
  };

  [setRenderComponents] = () => {
    const newComponentsToRender = [];

    for (let i = 0; i < this.state.componentsToRenderLength; i++) {
      if (!_.isNil(this.props.children[i])) {
        newComponentsToRender.push(
          <div
            key={i}
            ref={c => (this["container_" + i] = c)}
            style={{ height: "100%", width: "100%" }}
            className={"number" + i}
            id={i == 0 ? "next" : null}
          >
            {this.props.children[i]}
          </div>
        );
      } else {
        break;
      }
    }

    return newComponentsToRender;
  };

  [scrollWindowUp] = () => {
    if (!this[scrolling] && !this.props.blockScrollUp) {
      if (!_.isNil(this["container_" + (this.state.componentIndex - 1)])) {
        this[scrolling] = true;

        this._pageContainer.style.transform = `translate3d(0, ${(this.state
          .componentIndex -
          1) *
          -100}%, 0)`;
        if (this.props.pageOnChange) {
          this.props.pageOnChange(this.state.componentIndex);
        }

        $(".number" + this.state.componentIndex).attr("id", null);

        $(
          ".number" +
            (this.state.componentIndex - 1 > 0
              ? this.state.componentIndex - 1
              : 0)
        ).attr("id", "active");
        $(".active").removeClass("active");
        $("#" + $("#active").attr("class")).addClass("active");

        setTimeout(() => {
          this.setState(
            prevState => ({ componentIndex: prevState.componentIndex - 1 }),
            () => {
              this[scrolling] = false;
              this[previousTouchMove] = null;
              $("#active")
                .find(".hide")
                .removeClass("hide");
            }
          );
        }, this.props.animationTimer + ANIMATION_TIMER);
      } else if (this.props.scrollUnavailable) {
        this.props.scrollUnavailable();
      }
    }
  };

  [scrollWindowDown] = () => {
    if (!this[scrolling] && !this.props.blockScrollDown) {
      if (!_.isNil(this["container_" + (this.state.componentIndex + 1)])) {
        this[scrolling] = true;
        this._pageContainer.style.transform = `translate3d(0, ${(this.state
          .componentIndex +
          1) *
          -100}%, 0)`;

        if (this.props.pageOnChange) {
          this.props.pageOnChange(this.state.componentIndex + 2);
        }

        $(".number" + this.state.componentIndex).attr("id", null);

        $(
          ".number" +
            (this.state.componentIndex + 1 > this.state.componentsToRenderLength
              ? this.state.componentsToRenderLength - 1
              : this.state.componentIndex + 1)
        ).attr("id", "active");
        $(".active").removeClass("active");
        $("#" + $("#active").attr("class")).addClass("active");

        setTimeout(() => {
          this.setState(
            prevState => ({ componentIndex: prevState.componentIndex + 1 }),
            () => {
              this[scrolling] = false;
              this[previousTouchMove] = null;
              this[addNextComponent]();
            }
          );
          $("#active")
            .find(".hide")
            .removeClass("hide");
        }, this.props.animationTimer + ANIMATION_TIMER);
      } else if (this.props.scrollUnavailable) {
        this.props.scrollUnavailable();
      }
    }
  };
}
