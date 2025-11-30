# IWidget.Active

IWidget.Active
-


# IWidget.Active


## Синтаксис


Active: Boolean;


## Описание


Свойство Active определяет,
 активен ли компонент.


## Комментарии


Допустимые значения:


	- True. Компонент активен.
	 Данные передаются компоненту, указанному в свойстве [IWidget.NavBar](IWidget.NavBar.htm).


	- False. Компонент не
	 активен.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней следующих компонентов:


	- кнопка с наименованием «Button1»;


	- TableWidget с наименованием «TableWidget1»;


	- NavigationBar с наименованием «NavigationBar1»;


	- UiErAnalyzer с наименованием «UiErAnalyzer1».


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Pads: INavigationBarPadList;

    Pad: INavigationBarPad;

Begin

    //Навигационная панель, которая будет отображать вкладки

    TableWidget1.NavBar := NavigationBar1;

    //Источник, для которого будут применяться настройки

    TableWidget1.Source := UiErAnalyzer1 As ITableSource;

    //Активация компонентов

    UiErAnalyzer1.Active := True;

    TableWidget1.Active := True;

    //Список доступных вкладок

    Pads := TableWidget1.Pads;

    For Each Pad In Pads Do

        If Pad.IsSystem Then

            Debug.WriteLine(Pad.SystemId);

        End If;

    End For;

End Sub Button1OnClick;


При нажатии на кнопку будет произведена настройка и подключение компонента
 «TableWidget1». Данный компонент будет осуществлять связь и предоставлять
 доступ к системным вкладкам для настройки таблицы объекта репозитория,
 который подключен в компоненте «UiErAnalyzer1». Список доступных вкладок
 будет выведен в консоль среды разработки.


См. также:


[IWidget](IWidget.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
