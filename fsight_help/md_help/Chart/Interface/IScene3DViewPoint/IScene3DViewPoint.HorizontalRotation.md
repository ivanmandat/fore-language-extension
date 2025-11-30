# IScene3DViewPoint.HorizontalRotation

IScene3DViewPoint.HorizontalRotation
-


# IScene3DViewPoint.HorizontalRotation


## Синтаксис


HorizontalRotation: Double;


## Описание


Свойство HorizontalRotation
 определяет горизонтальный поворот вокруг сцены.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.SceneViewProperty.ViewPoint.HorizontalRotation := 30;

	End Sub Chart3D;


После выполнения примера будет произведен горизонтальный поворот сцены
 на 30 градусов.


См. также:


[IScene3DViewPoint](IScene3DViewPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
