# TabSheetModel.getStyleByIndex

TabSheetModel.getStyleByIndex
-


# TabSheetModel.getStyleByIndex


## Синтаксис


getStyleByIndex(index);


## Параметры


*index.* Number. Индекс.


## Описание


Метод getStyleByIndex возвращает
 стиль по индексу.


## Комментарии


Возвращает объект типа [PP.Ui.TabSheetCellStyle](../TabSheetCellStyle/TabSheetCellStyle.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим первый стиль:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим первый стиль
model.getStyleByIndex(0);

В результате выполнения примера был получен первый стиль.


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
