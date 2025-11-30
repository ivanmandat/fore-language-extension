# EaxAnalyzer.ViewSize

EaxAnalyzer.ViewSize
-


**


# EaxAnalyzer.ViewSize


## Синтаксис


ViewSize: Object


## Описание


Свойство ViewSize** содержит
 размер визуализатора экспресс-отчета, при использовании вертикального/горизонтального
 расположения визуализаторов.


## Комментарии


Свойство актуально, если визуализаторы расположены вертикально/горизонтально
 и размер визуализатора изменен.


Значение свойства устанавливается из JSON и с помощью метода setViewSize(value, objType), а возвращается
 с помощью метода getViewSize(objType).


Параметры:


value.
 Object. Устанавливаемое значение;


objType.
 PP.Exp.Ui.EaxObjectType. Тип визуализатора.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). В отчете должно быть включено горизонтальное
 отображение визуализаторов и таблица должна быть с измененным размером:


var eaxAnalyzer = expressBox.getSource();
// Получим текущий размер таблицы
eaxAnalyzer.getViewSize(PP.Exp.Ui.EaxObjectType.Grid);
// -> Object {Width: 1318, Height: 210, Units: "DLU96"}

В результате выполнения примера был получен визуальный размер таблицы.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
