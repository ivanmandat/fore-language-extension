# ITabView.ShowFormatDialogEx

ITabView.ShowFormatDialogEx
-


# ITabView.ShowFormatDialogEx


## Синтаксис


ShowFormatDialogEx(Wnd: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm));


## Параметры


Wnd. Окно, относительно которого
 окно формата будет открыто модально.


## Описание


Метод ShowFormatDialogEx отображает
 окно формата для текущего выделения.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet с наименованием
 «UiTabSheet1» и компонента TabSheetBox, для которого «UiTabSheet1» установлен
 в качестве источника данных.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    TView: ITabView;

Begin

    TView := UiTabSheet1.TabSheet.View;

    TView.ShowFormatDialogEx(Self As IWin32Window);

End Sub Button1OnClick;


При нажатии на кнопку будет отображено окно формата для текущего выделенного
 диапазона таблицы. Окно будет открыто модально относительно текущей формы.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
