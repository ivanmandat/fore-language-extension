# IWxRoundedRectangleBaloon.RoundingFactor

IWxRoundedRectangleBaloon.RoundingFactor
-


# IWxRoundedRectangleBaloon.RoundingFactor


## Синтаксис


RoundingFactor: Double;


## Описание


Свойство RoundingFactor определяет
 степень округлости прямоугольной выноски.


## Комментарии


Округлость выноски прямо пропорциональна значению данного свойства.
 Значение округленности выноски определяется в диапазоне [0, 1].


Пример обычной выноски (слева) и выноски с изменённым значением округлости
 (справа):


![](IWxRoundedRectangleBaloon_RoundingFactor.gif)


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox и компонента
 UiWorkspace с наименованием UiWorkspace1, являющимся источником данных
 для WorkspaceBox.


Добавьте ссылки на системные сборки: Andy, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    WS: IWxWorkspace;

	    Rect: IWxRoundedRectangleBaloon;

	Begin

	    WS := UiWorkspace1.WxWorkspace;

	    WS.BeginUpdate;

	    Rect := WS.CreateRoundedRectangleBaloon;

	    Rect.RoundingFactor := 0.3;

	    WS.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера на рабочем пространстве будет создана скругленная
 выноска с заданным значением округлости.


См. также:


[IWxRoundedRectangleBaloon](IWxRoundedRectangleBaloon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
