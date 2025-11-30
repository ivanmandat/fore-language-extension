# TabSheetModel.isSelectableCoord

TabSheetModel.isSelectableCoord
-


# TabSheetModel.isSelectableCoord


## Синтаксис


isSelectableCoord(coord: [PP.Ui.TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm));


## Параметры


*coord.* Координаты ячейки
 таблицы.


## Описание


Метод isSelectableCoord возвращает
 признак возможности выделения ячейки с указанными координатами.


## Комментарии


Метод возвращает значение true,
 если ячейка с указанными координатами может быть выделена, иначе - значение
 false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»).


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Зададим координаты ячейки
var coord = tabSheet.getCoord(1, 1);
// Убедимся, что ячейка с указанными координатами может быть выделена
if (model.isSelectableCoord(coord)) {
   console.log("Ячейка может быть выделена");
} else {
    console.log("Выделение ячейки запрещено");
};
После выполнения примера в консоль будет выведено сообщение о возможности
 выделения ячейки с указанными координатами.


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
