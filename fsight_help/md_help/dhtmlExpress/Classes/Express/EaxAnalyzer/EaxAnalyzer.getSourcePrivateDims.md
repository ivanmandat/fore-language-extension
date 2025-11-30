# EaxAnalyzer.getSourcePrivateDims

EaxAnalyzer.getSourcePrivateDims
-


# EaxAnalyzer.getSourcePrivateDims


## Синтаксис


getSourcePrivateDims(sourceKey: Number, getFixedDims:
 Boolean);


## Параметры


sourceKey. Внутренний индекс
 источника данных;


getFixedDims. Признак получения
 частных фиксированных. Метод будет возвращать или частные измерения, или
 частные фиксированные.


## Описание


Метод getSourcePrivateDims возвращает
 ключи частных измерений указанного источника.


## Комментарии


Метод возвращает значение типа Array.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»), содержащий несколько источников
 данных. Получим частные измерения:


// Получим частные измерения второго источника данных
eaxAnalyzer.getSourcePrivateDims(1, false);
// -> [Object, Object]
В результате выполнения примера в консоли браузера были выведены наименования
 частных измерений второго источника данных.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
