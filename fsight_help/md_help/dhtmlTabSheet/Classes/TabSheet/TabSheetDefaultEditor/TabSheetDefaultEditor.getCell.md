# TabSheetDefaultEditor.getCell

TabSheetDefaultEditor.getCell
-


**


# TabSheetDefaultEditor.getCell


## Синтаксис


getCell();


## Описание


Метод getCell** возвращает ячейку, содержащую базовый редактор таблицы.


## Комментарии


Метод возвращает значение типа PP.Ui.[TabSheetCell](../TabSheetCell/TabSheetCell.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Откроем редактор для ячейки с координатами (0, 1), получим форматированный текст данной ячейки, её координаты, идентификаторы самой таблицы и текстового поля данного редактора:


// Начнем редактировать ячейку с координатами (1, 1);
tabSheet.edit(0, 1);
// Получим текущий активный редактор ячейки
var editor = tabSheet.getCurrentCellEditor();
// Получим ячейку, содержащую редактор
var editedCell = editor.getCell();
// Выведем информацию по полученной ячейке
console.log("Форматированный текст редактируемой ячейки: " + editedCell.CellData.FormattedText);
// Получим координаты ячейки, содержащей редактор
var coord = editor.getCoord();
console.log("Координаты ячейки: (" + coord.rowIndex + ", " + coord.colIndex + ")")
// Получим таблицу
var ts = editor.getTabSheet();
console.log("Идентификатор таблицы: " + ts.getId());
// Получим текстовое поле ввода редактора таблицы
var textBox = editor.getTextBox();
console.log("Идентификатор текстового поля: " + textBox.getId());

В результате выполнения примера был открыт редактор для ячейки с координатами (0, 1):


![](TabSheetDefaultEditor.getCell.png)


При этом в консоли браузера был выведен форматированный текст данной ячейки, её координаты, идентификаторы самой таблицы и текстового поля данного редактора:


Форматированный текст редактируемой ячейки: 3912

Координаты ячейки: (0, 1)

Идентификатор таблицы: tabSheet1

Идентификатор текстового поля: 571


См. также:


[TabSheetDefaultEditor](TabSheetDefaultEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
