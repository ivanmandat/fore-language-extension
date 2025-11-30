# IMsCollapseTransform.InputLevel

IMsCollapseTransform.InputLevel
-


# IMsCollapseTransform.InputLevel


## Синтаксис


		InputLevel: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);


## Описание


Свойство InputLevel
 определяет исходную динамику.


## Комментарии


Для корректного расчёта модели исходная
 динамика должна быть меньше [динамики
 модели](../IMsFormula/IMsFormula.Level.htm). Например, в качестве шага расчёта динамики модели указан «Квартал».
 Таким образом, исходной динамикой могут быть лишь «Месяцы», «Недели» и
 «Дни».


## Пример


Использование свойства приведено в примере для [IMsCollapseTransform.Input](IMsCollapseTransform.Input.htm).


См. также:


[IMsCollapseTransform](IMsCollapseTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
