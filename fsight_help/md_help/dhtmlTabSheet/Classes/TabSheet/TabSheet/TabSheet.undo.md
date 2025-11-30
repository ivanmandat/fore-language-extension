# TabSheet.undo

TabSheet.undo
-


**


# TabSheet.undo


## Синтаксис


undo();


## Описание


Метод undo** отменяет последнее изменение в таблице.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Установим новые значения для трёх ячеек, а затем отменим изменения, выводя их значения для контроля:


// Получим диапазон ячеек
var range = tabSheet.getRange(0, 0, 2, 0);
// Сериализуем полученный диапазон в текст
var result = tabSheet.convertToPlainText(range);
// Выведем первоначальные данные из ячеек
console.log("Первоначальные значения ячеек: " + result);
// Изменим данные ячеек
tabSheet.setCellValue("NewValue1", 0, 0);
tabSheet.setCellValue("NewValue2", 0, 1);
tabSheet.setCellValue("NewValue3", 0, 2);
// Выведем измененные данные из ячейки
var result1 = tabSheet.convertToPlainText(range);
console.log("Результат после установки новых значений: " + result1);
// Выполним отмену последнего изменения
tabSheet.undo()
var result2 = tabSheet.convertToPlainText(range);
console.log("Результат после отмены последнего изменения: " + result2);
// Выполним отмену последних изменений, доступных для отката
tabSheet.undoAll()
var result3 = tabSheet.convertToPlainText(range);
console.log("Результат после отмены всех изменений: " + result3);

В результате выполнения примера были установлены новые значения для трёх ячеек, а затем совершённые изменения были отменены. В консоли браузера были выведены первоначальные, промежуточные и окончательные значения ячеек:


Первоначальные значения ячеек: 16905 3912 9242

Результат после установки новых значений: NewValue1 NewValue2 NewValue3

Результат после отмены последнего изменения: NewValue1 NewValue2 9242

Результат после отмены всех изменений: 16905 3912 9242


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
