# ITabCellStyle.Locked

ITabCellStyle.Locked
-


# ITabCellStyle.Locked


## Синтаксис


Locked: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство Locked определяет признак
 защиты ячейки от изменения значения.


## Комментарии


По умолчанию свойству установлено значение [TriState.OffOption](ForeSys.chm::/Enums/TriState.htm).
 При этом можно редактировать значение и формулу ячейки. Если свойству
 установить значение [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm),
 то ячейка будет защищена от редактирования. Нельзя будет перейти в режим
 редактирования, используя горячую клавишу F2, либо метод [EditCell](../ITabView/ITabView.EditCell.htm).
 Для изменения значения ячейки будут доступны свойства [Value](../ITabRange/ITabRange.Value.htm),
 либо [Formula](../ITabRange/ITabRange.Formula.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox и компонента
 UiTabSheet с наименованием UiTabSheet1. UiTabSheet1 является источником
 данных для компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.View.Selection.Range;

	    Style := TRange.Style;

	    Style.Locked := TriState.OnOption;

	End Sub Button1OnClick;


При нажатии на кнопку для выделенного диапазона ячеек будет установлена
 защита от редактирования значения.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
