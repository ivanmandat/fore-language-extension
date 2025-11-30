# IApplicationWindows.ForegroundWindow

IApplicationWindows.ForegroundWindow
-


# IApplicationWindows.ForegroundWindow


## Синтаксис


ForegroundWindow: [IWin32Window](ModForms.chm::/Interface/IWin32Window/IWin32Window.htm);


## Описание


Свойство ForegroundWindow возвращает
 окно приложения, находящееся в данный момент на переднем плане.


## Пример


Для выполнения примера предполагается наличие формы с наименованием
 MyForm.


	Sub Macro;

	Var

	    win32window: IWin32Window;

	    f: MyForm;

	Begin

	    win32window := WinApplication.Instance.Windows.ForegroundWindow;

	    f := New MyForm.CreateForm(win32window);

	    f.ShowModal;

	End Sub Macro;


Данный пример является макросом для регламентного отчёта. При выполнении
 макроса, форма MyForm запускается модально относительно регламентного
 отчёта. После закрытия формы фокус переходит к отчёту.


См. также:


[IApplicationWindows](IApplicationWindows.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
