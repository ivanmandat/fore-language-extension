# IWxWorkspace.CreateEllipseBaloon

IWxWorkspace.CreateEllipseBaloon
-


# IWxWorkspace.CreateEllipseBaloon


## Синтаксис


CreateEllipseBaloon: [IWxEllipseBaloon](../IWxEllipseBaloon/IWxEllipseBaloon.htm);


## Описание


Метод CreateEllipseBaloon создает
 овальную выноску.


## Комментарии


Вид овальной выноски с настройками по умолчанию:


![](IWxWorkspace_CreateEllipseBaloon.gif)


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox и компонента
 UiWorkspace с наименованием UiWorkspace1, являющимся источником данных
 для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    WS: IWxWorkspace;

	    Rect: IWxEllipseBaloon;

	Begin

	    WS := UiWorkspace1.WxWorkspace;

	    WS.BeginUpdate;

	    Rect := WS.CreateEllipseBaloon;

	    WS.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера на рабочем пространстве будет создана овальная
 выноска.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
