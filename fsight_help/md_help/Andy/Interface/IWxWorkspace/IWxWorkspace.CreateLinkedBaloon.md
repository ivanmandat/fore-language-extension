# IWxWorkspace.CreateLinkedBaloon

IWxWorkspace.CreateLinkedBaloon
-


# IWxWorkspace.CreateLinkedBaloon


## Синтаксис


CreateLinkedBaloon: [IWxLinkedBaloon](../IWxLinkedBaloon/IWxLinkedBaloon.htm);


## Описание


Метод CreateLinkedBaloon создает
 выноску с точками.


## Комментарии


Вид выноски с точками с настройками по умолчанию:


![](IWxWorkspace_CreateLinkedBaloon.gif)


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox и компонента
 UiWorkspace с наименованием UiWorkspace1, являющимся источником данных
 для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Drawing, Metabase.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    WS: IWxWorkspace;

	    Rect: IWxLinkedBaloon;

	Begin

	    WS := UiWorkspace1.WxWorkspace;

	    WS.BeginUpdate;

	    Rect := WS.CreateLinkedBaloon;

	    WS.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера на рабочем пространстве будет создана выноска
 с точками.


См. также:


[IWxWorkspace](IWxWorkspace.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
