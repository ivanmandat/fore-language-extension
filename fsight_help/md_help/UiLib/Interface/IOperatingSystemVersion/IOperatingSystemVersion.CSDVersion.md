# IOperatingSystemVersion.CSDVersion

IOperatingSystemVersion.CSDVersion
-


# IOperatingSystemVersion.CSDVersion


## Синтаксис


CSDVersion: String;


## Описание


Свойство CSDVersion возвращает
 наименование последнего обновления, установленного в операционной системе.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1» и компонента Memo с наименованием
 «Memo1».


Добавьте ссылки на системные сборки: Forms, Collections, UI.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    App: IWinApplication;

	    OperSysVer: IOperatingSystemVersion;

	    Lines: IStringList;

	Begin

	    App := WinApplication.Instance;

	    OperSysVer := App.GetOperatingSystemVersion;

	    Lines := Memo1.Lines;

	    Lines.Clear;

	    Lines.Add("Основная версия ОС: " + OperSysVer.MajorVersion.ToString);

	    Lines.Add("Промежуточная версия ОС: " + OperSysVer.MinorVersion.ToString);

	    Lines.Add("Наименование обновления: " + OperSysVer.CSDVersion);

	    Lines.Add("Полное наименование ОС: " + OperSysVer.FullName);

	    Lines.Add("Наименование ОС: " + OperSysVer.Name);

	    Lines.Add("Идентификатор платформы ОС: " + OperSysVer.PlatformId.ToString);

	End Sub Button1OnClick;


При нажатии на кнопку в компонент «Memo1» будет добавлена информация
 об операционной системе.


См. также:


[IOperatingSystemVersion](IOperatingSystemVersion.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
