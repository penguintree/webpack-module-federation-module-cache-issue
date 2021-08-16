const body = document.getElementsByTagName('body')[0];
body.innerHTML = '<div>check console output</div>';

import somePackage from 'firstRemote/x';
import anotherPackage from 'secondRemote/y';

try {
   console.warn('somePackage.doSomethingWithPackage1(); - should log "something is done by package 1"');
   somePackage.doSomethingWithPackage1();
}
catch (err) {
   console.error(err);
}

try {
   console.warn('anotherPackage.doSomethingWithPackage2(); - should log "something else is done"')
   anotherPackage.doSomethingWithPackage2();
} catch (err) {
   console.error(err);
}

console.warn(`somePackage.getPackageName() : ${somePackage.getPackageName()}`);
console.warn(`anotherPackage.getPackageName() : ${anotherPackage.getPackageName()}`);