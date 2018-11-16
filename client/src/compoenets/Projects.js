import React from 'react';
import './style/project.css';

const style = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    'max-width': '500px',
    minHeight: '450px',
    minWidth: '300px',
  },
  flexy: {
    display: 'flex',
    flexDirection: 'column',
  },
  pic: {
    maxWidth: '498px',
    maxHeight: '332px',
  },
  btnColor: {
    backgroundColor: '#4A3F89',
    width: '80px',
    textAlign: 'center',
  },
};

const Project = props => (
      <article style={style.layout} className="br2 ba dark-gray b--black-10 mv4 w-40 center">
        <img style={style.pic} src={props.item.picture} className="db w-100 br2 br--top" alt="project logo"></img>
        <div className="pa2 ph3-ns pb3-ns" id='myHover' data-hover={props.item.tech}>
          <div style={style.flexy} className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">{props.item.name}</h1>
            </div>
            <div className="dtc tr">
              <h2 className="f5 mv0">{props.item.type}</h2>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">
            {props.item.description}
          </p>
        </div>
        <div className="center pa2 ph3-ns pb3-ns">
          <a style={style.btnColor} href={props.item.live} className='f6 link dim br-pill ph3 pv2 mb2 dib white mr3' target="_blank">Live</a>
          <a style={style.btnColor} href={props.item.github} className='f6 link dim br-pill ph3 pv2 mb2 dib white' target="_blank">Github</a>
        </div>
      </article>
);

export default Project;
