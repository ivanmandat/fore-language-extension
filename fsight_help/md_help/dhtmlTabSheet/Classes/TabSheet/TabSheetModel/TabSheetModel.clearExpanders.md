# TabSheetModel.clearExpanders

TabSheetModel.clearExpanders
-


**


# TabSheetModel.clearExpanders


## Синтаксис


clearExpanders();


## Описание


Метод clearExpanders** удаляет группировки ячеек в таблице.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Первоначально таблица имеет следующий вид:


![](../TabSheet/TabSheet.addCellControl_2.png)


Получим координаты всех группировок в таблице, после чего удалим их:


// Получим модель данных таблицы
var model = tabSheet.getModel();
// Получим информацию о группировках ячеек в формате JSON
var jsonExpanders = model.getExpandersJSON();
for (var i in jsonExpanders) {
    var exp = jsonExpanders[i];
    // Определим диапазон группировки ячеек таблицы
    var str = "Диапазон группировки ячеек: (" + exp["@T"] + ", " + exp["@L"] + ")-(" + (exp["@T"] + exp["@H"]) + ", " + (exp["@L"] + exp["@W"]) + ")";
    console.log(str);
};
// Удалим группировки ячеек таблицы
model.clearExpanders();

После выполнения данного примера группировка ячеек таблицы была удалена:


![](TabSheetModel.clearExpanders.png)


А в консоли браузера были выведены координаты удалённой группировки ячеек таблицы:


Диапазон группировки ячеек: (0, 0)-(1, 1)


См. также:


[TabSheetModel](TabSheetModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
