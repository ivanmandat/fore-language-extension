# IScene3DCoordinates.AxisStep

IScene3DCoordinates.AxisStep
-


# IScene3DCoordinates.AxisStep


## Синтаксис


AxisStep: Integer;


## Описание


Свойство AxisStep определяет
 шаг отображения подписей по основным осям.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.SceneCoordinates.AxisStep := 5;

	End Sub Chart3D;


После выполнения примера по основным осям будет отображено заданное
 число подписей.


См. также:


[IScene3DCoordinates](IScene3DCoordinates.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
