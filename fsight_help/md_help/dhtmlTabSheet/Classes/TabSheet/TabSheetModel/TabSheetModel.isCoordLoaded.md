# TabSheetModel.isCoordLoaded

TabSheetModel.isCoordLoaded
-


**


# TabSheetModel.isCoordLoaded


## Синтаксис


isCoordLoaded(coord: [PP.Ui.TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm));


## Параметры


*coord.* Координаты ячейки
 таблицы.


## Описание


Метод isCoordLoaded** определяет,
 загружена ли ячейка с указанными координатами.


## Комментарии


Метод возвращает значение true,
 если ячейка с указанными координатами загружена, иначе - значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»).


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Зададим координаты ячейки
var coord = tabSheet.getCoord(1, 1);
// Убедимся, что ячейка с указанными координатами загружена
if (model.isCoordLoaded(coord)) {
   console.log("Ячейка загружена");
} else {
    console.log("Ячейка не загружена");
};
После выполнения примера в консоль будет выведено сообщение о загрузке
 ячейки с указанными координатами.


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
