# PP.getEnumInterfMembers

PP.getEnumInterfMembers
-


**


# PP.getEnumInterfMembers


## Синтаксис


getEnumInterfMembers(object: Object|Function, asArray: Boolean);


## Параметры


*object.* Объект PP, либо ссылка на тип;


*asArray.* Признак, определяющий вид, в котором нужно вернуть данные. Если параметр равен значению true, то данные будут получены в виде массива, иначе - в виде JSON-объекта .


## Описание


Метод getEnumInterfMembers** возвращает все члены интерфейса или перечисления.


## Комментарии


Метод возвращает массив или объект с членами интерфейса или перечисления.


## Пример


Для выполнения примера необходимо наличие на html-странице ссылки на файл сценария PP.js. Определим все члены интерфейса PP.IDataSource и перечисления PP.ControlState:


// Определим члены интерфейса PP.IDataSource
var interfaceElements = PP.getEnumInterfMembers(PP.IDataSource, true);
console.log("Члены интерфейса PP.IDataSource: " + interfaceElements);
// Опеределим члены перечисления PP.ControlState
enumElements = PP.getEnumInterfMembers(PP.ControlState, false);
var result = "";
for (var i in enumElements) {
    var element = enumElements[i];
    if (PP.isMemberOf(enumElements, element)) {
        result += element;
        result += " "
    }
};
console.log("Члены перечисления PP.ControlState: " + result);

В результате выполнения примера в консоли браузера был выведен массив членов интерфейса PP.IDataSource, а также список членов перечисления PP.ControlState:


Члены интерфейса PP.IDataSource: getData,getDimensions


Члены перечисления PP.ControlState: Release Hover Press Active Disable


См. также:


[PP](../PP.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
