import { abstractFactoryApp } from './abstractfactory/app';
import { builderApp } from './builder/app';
import { factoryApp } from './factory/app';
import { prototypeApp } from './prototype/app';
import { singletonApp } from './singleton/app';

factoryApp.main();
abstractFactoryApp.main();
singletonApp.main();
builderApp.main();
prototypeApp.main();
