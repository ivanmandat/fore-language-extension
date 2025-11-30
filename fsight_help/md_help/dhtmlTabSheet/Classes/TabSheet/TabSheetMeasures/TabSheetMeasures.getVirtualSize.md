# TabSheetMeasures.getVirtualSize

TabSheetMeasures.getVirtualSize
-


**


# TabSheetMeasures.getVirtualSize


## Синтаксис


getVirtualSize();


## Описание


Метод getVirtualSize** возвращает виртуальные размеры таблицы в пикселях.


## Комментарии


Метод возвращает JSON-объект со следующими полями: height - высота таблицы, width - её ширина.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Определим виртуальные размеры таблицы и реальные размеры одной из её ячеек:


// Получим измерения таблицы
var measures = tabSheet.getMeasures();
// Получим виртуальные размеры таблицы в пикселях
var vSize = measures.getVirtualSize();
console.log("Ширина таблицы: " + vSize.width + ", " + "высота: " + vSize.height);
// Получим реальные размеры ячейки A0
var rCoordSize = measures.getRealCoordSize(tabSheet.coord(0, 0));
console.log("Ширина ячейки A0: " + rCoordSize.width + ", " + "высота: " + rCoordSize.height);

В результате выполнения примера в консоли браузера были выведены виртуальные размеры таблицы в пикселях и реальные размеры ячейки A0:


Ширина таблицы: 633, высота: 318

Ширина ячейки A0: 100, высота: 50


См. также:


[TabSheetMeasures](TabSheetMeasures.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
