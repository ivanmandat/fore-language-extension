# EaxAnalyzer.getCustomHierMd

EaxAnalyzer.getCustomHierMd
-


# EaxAnalyzer.getCustomHierMd


## Синтаксис


getCustomHierMd(dimKey: Integer);


## Параметры


dimKey. Ключ измерения.


## Описание


Метод getCustomHierMd возвращает
 метаданные пользовательской иерархии.


## Комментарии


Если пользовательской иерархии не задано метод возвращает null.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Определим метаданные альтернативной
 иерархии измерения с индексом 2:


eax = expressBox.getSource();
// Получим ключ измерения с индексом 2
dimK = eax.getDims()[2].getKey();
// Получим метаданные альтернативной иерархии
console.debug(eax.getCustomHierMd(dimK));
// -> Object {k: 2, vis: true, arg: Object}
В результате выполнения примера в консоль были выведены метаданные альтернативной
 иерархии измерения с индексом 2.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
