# IScene3DViewPoint.VerticalRotation

IScene3DViewPoint.VerticalRotation
-


# IScene3DViewPoint.VerticalRotation


## Синтаксис


VerticalRotation: Double;


## Описание


Свойство VerticalRotation определяет
 вертикальный поворот вокруг сцены.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.SceneViewProperty.ViewPoint.VerticalRotation := 30;

	End Sub Chart3D;


После выполнения примера будет произведен вертикальный поворот сцены
 на 30 градусов.


См. также:


[IScene3DViewPoint](IScene3DViewPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
