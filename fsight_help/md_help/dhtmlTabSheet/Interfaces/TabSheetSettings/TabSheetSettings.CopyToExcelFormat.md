# TabSheetSettings.CopyToExcelFormat

TabSheetSettings.CopyToExcelFormat
-


# TabSheetSettings.CopyToExcelFormat


## Синтаксис


CopyToExcelFormat: Boolean;


## Описание


Свойство CopyToExcelFormat определяет,
 будут ли данные ячеек таблицы копироваться в буфер обмена в виде табличной
 верстки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setCopyToExcelFormat,
 а возвращается с помощью метода getCopyToExcelFormat.


Если свойство имеет значение true,
 то данные ячеек таблицы будут копироваться в буфер обмена в виде табличной
 верстки, иначе - в виде обычного текста (по умолчанию).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Запретим выделение нескольких ячеек
 таблицы, затем получим диапазон ячеек и преобразуем его в обычный текст
 и в текст в формате табличной верстки.


// Запретим выделение нескольких ячеек таблицы
tabSheet.setMultiCellSelectionEnable(false);
// Получим диапазон ячеек
var range = tabSheet.getRangeFromString("A0:A0");
// Преобразуем данные диапазона в обычный текст
console.log("Обычный текст: " + range.toPlainText());
// Преобразуем данные диапазона в текст в формате табличной верстки
tabSheet.setCopyToExcelFormat(true);
console.log("Текст в формате табличной верстки: " + range.toPlainText());
// Получим стиль ячейки таблицы
var style = tabSheet.getModel().getCell(tabSheet.getCoordFromString("A1")).getStyle();
В результате выполнения примера была отключена возможность выделения
 нескольких ячеек одновременно.


Также в консоли браузера был выведен текст диапазона ячеек в обычном
 формате и в формате табличной вёрстки:


Обычный текст: 16905


Текст в формате табличной верстки: <table><tr><td
 style='background-color: #D2DFEE; font-family: Arial; font-size: 10.67px;
 color: #000000; text-decoration: underline ; vertical-align: top; text-align:
 left; word-wrap: break-word; padding: 5px 0px 5px 5px; '>16905</td></tr></table>


См. также:


[TabSheetSettings](TabSheetSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
