# ITabEditor

ITabEditor
-


# ITabEditor


Сборка: Tab;


## Описание


Интерфейс ITabEditor содержит
 свойства для работы с визуальным редактором ячеек таблицы.


## Иерархия наследования


ITabEditor


## Комментарии


Визуальный редактор ячейки доступен когда ячейка находится в режиме
 редактирования. Для перевода ячейки в режим редактирования необходимо
 выполнить одно из следующих действий:


	- Дважды щелкнуть по ячейке.


	- Выделить ячейку и нажать клавишу F2.


	- Вызвать метод [ITabView.EditCell](../ITabView/ITabView.EditCell.htm).


Редактирование ячеек доступно если свойству [ITabCellStyle.Locked](../ITabCellStyle/ITabCellStyle.Locked.htm)
 установлено значение TriState.OffOption. Если для таблицы включено отслеживание
 события [OnEditorTextChanged](../../Class/TabSheetBox/TabSheetBox.OnEditorTextChanged.htm)
 (Группа событий [TabViewEventGroups.EditorEvents](../../Enums/TabViewEventGroups.htm)
 включена в значение свойства [EventMask](../ITabSheet/ITabSheet.EventMask.htm)),
 то используя аргумент данного события можно получить параметры визуального
 редактора, описываемые свойствами интерфейса ITabEditor.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Column](ITabEditor.Column.htm)
		 Свойство Column возвращает
		 индекс столбца ячейки, редактирование которой производится в текущий
		 момент.


		 ![](../../Property_Image.gif)
		 [Row](ITabEditor.Row.htm)
		 Свойство Row возвращает
		 индекс строки ячейки, редактирование которой производится в текущий
		 момент.


		 ![](../../Property_Image.gif)
		 [Sheet](ITabEditor.Sheet.htm)
		 Свойство Sheet возвращает
		 таблицу, на которой расположена редактируемая ячейка.


		 ![](../../Property_Image.gif)
		 [Text](ITabEditor.Text.htm)
		 Свойство Text возвращает
		 текст, установленный в текущий момент в редакторе ячейки.


		 ![](../../Property_Image.gif)
		 [XamlText](ITabEditor.XamlText.htm)
		 Свойство XamlText возвращает
		 отформатированный текст в формате XML, который в текущий момент
		 установлен в редакторе ячейки.


См. также:


[Интерфейсы
 сборки Tab](../TabSheet_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
