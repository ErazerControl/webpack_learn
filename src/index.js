import _ from 'lodash';
import './style/index.css';
import './style/a.scss';
function createDomElement() {
    var newNode = document.createElement('div');
    newNode.innerHTML = _.join(['aaa','xfhan','syy'],'');
    newNode.classList.add('box');
    return newNode;
}

var divDom =  createDomElement();
document.body.appendChild(divDom);
console.log(222122);
class Temp {
    show() {
      console.log('this.Age :', this.Age);
    }
    get Age() {
      return this._age;
    }
    set Age(val) {
      this._age = val + 1;
    }
  }
  
  let t = new Temp();
  t.Age = 19;
  
  t.show();
  let [a,b,c] = [1,2,3];
  console.log('a:', a);