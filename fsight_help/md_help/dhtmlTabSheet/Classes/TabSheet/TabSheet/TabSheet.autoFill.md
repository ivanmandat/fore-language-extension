# TabSheet.autoFill

TabSheet.autoFill
-


# TabSheet.autoFill


## Синтаксис


autoFill(source: [PP.Ui.TabSheetRange](../TabSheetRange/TabSheetRange.htm),
 destination: [PP.Ui.TabSheetRange](../TabSheetRange/TabSheetRange.htm),
 type: [PP.Ui.TabRangeFillType](../../../Enums/TabRangeFillType.htm));


## Параметры


source. Начальный диапазон,
 в котором необходимо произвести автозаполнение;


destination. Конечный диапазон.
 Необязательный параметр;


type. Тип автозаполнения. Необязательный
 параметр.


## Описание


Метод autoFill производит автоматическое
 заполнение указанного диапазона.


## Пример


Создайте HTML-страницу с [примером
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm) и выполните в консоли:


// Получим диапазон ячеек
var range = tabSheet.getRange(1, 1, 1, 1);
// Выделяем диапазон ячеек
tabSheet.select(range, false);
// Удалим данные всех ячеек таблицы
tabSheet.deleteRange(range);
// Заполним ячейки данными
tabSheet.autoFill(range, PP.Ui.TabRangeFillType.Fill);


В результате выполнения примера будет произведено автозаполнение диапазона
 B1:C2. При автозаполнении будет использован метод линейного тренда.


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
