# TabSheet.autoColumnWidth

TabSheet.autoColumnWidth
-


**


# TabSheet.autoColumnWidth


## Синтаксис


autoColumnWidth(colIndex: Number, fully: Boolean);


## Параметры


*colIndex.* Индекс колонки, ширину которой нужно подогнать;


fully. Определяет, будут ли
 при подгонке ширины столбцов учитываться невидимые ячейки. По умолчанию
 установлено значение true, то
 есть будут учитываться. Если установлено значение false,
 невидимые ячейки учитываться не будут.


## Описание


Метод autoColumnWidth**
 автоматически подгоняет ширину столбцов таблицы.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Установим автоматически ширину столбца
 и высоту строки с индексом 1:


// Определим индекс
var index = 1;
// Установим автоматически ширину второй колонки и высоту второй строки
tabSheet.autoColumnWidth(index);
tabSheet.autoRowHeight(index);
В результате выполнения примера была автоматически установлена ширина
 второго столбца и высота второй строки:


![](TabSheet.autoColumnWidth.png)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
