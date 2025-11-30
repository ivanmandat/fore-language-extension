# EaxAnalyzer.getDim

EaxAnalyzer.getDim
-
-


**


# EaxAnalyzer.getDim


## Синтаксис


getDim (key, sourceKey);


## Параметры


key. Ключ измерения;


sourceKey. Ключ источника измерения;


## Описание


Метод **getDim
 возвращает измерение по своему ключу и по ключу его источника.


## Комментарии


Метод возвращает объект типа [PP.Mb.DimSource](dhtmlDim.chm::/Classes/Metabase/DimSource/DimSource.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Выведем наименование измерения
 с ключом 0 или выведем сообщение о том, если данное измерение не найдено:


var eaxAnalyzer = expressBox.getSource();
// Получим измерение по ключу
var dim = eaxAnalyzer.getDim(0);
// Если измерение найдено, то выводим его наименование
if (dim) {
    console.log(dim.getName())
} else {
    console.log("Указанное измерение не найдено.");
}

В результате выполнения примера, если в экспресс-отчете имеется измерение
 с ключом 0, в консоли браузера будет выведено наименование этого измерения.
 Иначе будет выведено сообщение о том, что указанное измерение не найдено.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
