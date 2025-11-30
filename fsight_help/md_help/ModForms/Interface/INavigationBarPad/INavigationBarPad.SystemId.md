# INavigationBarPad.SystemId

INavigationBarPad.SystemId
-


# INavigationBarPad.SystemId


## Синтаксис


SystemId: String;


## Описание


Свойство SystemId возвращает
 идентификатор системной вкладки.


## Комментарии


Свойство актуально только для системных вкладок и доступно, если свойство
 [IsSystem](INavigationBarPad.IsSystem.htm)
 возвращает значение True.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента NavigationBar с наименованием
 «NavigationBar1» и какого-либо компонента (ChartWidget, MapWidget или
 TableWidget), у которого «NavigationBar1» выбран в качестве визуального
 компонента для отображения системных вкладок. Также в «NavigationBar1»
 созданы пользовательские вкладки.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Pads: INavigationBarPads;

    Pad: INavigationBarPad;

Begin

    Pads := NavigationBar1.Pads;

    For Each Pad In Pads Do

        If Pad.IsSystem Then

            Debug.WriteLine("Системная вкладка: " + Pad.Header.Title + ". (" + Pad.SystemId + ')');

        Else

            Debug.WriteLine("Пользовательская вкладка: " + Pad.Header.Title);

        End If;

    End For;

End Sub Button1OnClick;


При нажатии на кнопку в консоль среды разработки будет выведена информация
 о вкладках, отображаемых в компоненте «NavigationBar1». Для системных
 вкладок будет выведен заголовок и идентификатор, для пользовательских
 вкладок только заголовок.


См. также:


[INavigationBarPad](INavigationBarPad.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
