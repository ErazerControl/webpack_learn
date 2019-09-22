import _ from 'lodash';
import './style/index.css';
import './style/a.scss';
function createDomElement() {
    var newNode = document.createElement('div');
    newNode.innerHTML = _.join(['aicoder','xfhan','syy'],'');
    newNode.classList.add('box');
    return newNode;
}

var divDom =  createDomElement();
document.body.appendChild(divDom);