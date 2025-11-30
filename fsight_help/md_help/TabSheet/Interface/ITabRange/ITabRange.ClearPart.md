# ITabRange.ClearPart

ITabRange.ClearPart
-


# ITabRange.ClearPart


## Синтаксис


ClearPart(Part: [TabCleanPart](../../Enums/TabCleanPart.htm));


## Параметры


Part. Элементы
 диапазона ячеек, которые необходимо очистить. Элементы в списке разделяются
 посредством логической операции Or.


## Описание


Метод ClearPart осуществляет
 очистку указанных элементов диапазона ячеек.


## Комментарии


Использование метода актуально, если свойство [ITabCellStyle.Locked](../ITabCellStyle/ITabCellStyle.Locked.htm)
 принимает значение по умолчанию, при котором выключена защита ячеек от
 редактирования.


## Пример


Для выполнения примера разместите на форме компоненты Button, TabSheetBox
 и UiTabSheet с наименованиями «Button1», «TabSheetBox1» и «UiTabSheet1»
 соответственно. Для «TabSheetBox1» укажите источник данных «UiTabSheet1».


Добавьте ссылки на системные сборки: ExtCtrls, Forms, Tab.


Пример является обработчиком события OnClick для компонента «Button1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TView: ITabView;

    TRange: ITabRange;

Begin

    TView := UiTabSheet1.TabSheet.View;

    TRange := TView.Selection.Range;

    TRange.ClearPart(TabCleanPart.Value Or TabCleanPart.Colors);

End Sub Button1OnClick;


После нажатия на кнопку для выделенного диапазона ячеек будет осуществлена
 очистка значений и цветового оформления фона.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
