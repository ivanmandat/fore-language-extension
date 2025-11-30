# ITabView.ShowFormulaWizard

ITabView.ShowFormulaWizard
-


# ITabView.ShowFormulaWizard


## Синтаксис


ShowFormulaWizard(Wnd: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm);
 Range: [ITabRange](../ITabRange/ITabRange.htm));


## Параметры


Wnd. Окно, относительно которого
 открывается мастер формул.


Range. Ячейка или диапазон
 ячеек таблицы, для которых открывается окно мастера формул.


## Описание


Метод ShowFormulaWizard вызывает
 диалог мастера формул для диапазона ячеек.


## Комментарии


Окно мастера формул является модальным.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента TabSheetBox с идентификатором
 «TabSheetBox1» и какого-либо источника данных для TabSheetBox. Добавьте
 ссылку на системную сборку «Tab».


Пример является обработчиком события OnClick для кнопки "Button1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var Sheet: ITabSheet;

	    View: ITabView;

	    Range: ITabRange;

	Begin

	    Sheet := TabSheetBox1.Source.GetTabSheet;

	    View := Sheet.View;

	    View.ShowFormulaWizard(Self As IWin32Window, Range);

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку откроется окно мастера
 формул.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
