# IScene3DViewPoint.Scale

IScene3DViewPoint.Scale
-


# IScene3DViewPoint.Scale


## Синтаксис


Scale: Double;


## Описание


Свойство Scale определяет масштаб
 отображения сцены. Допустимые значения берутся из диапазона [0.5 , 4.0].
 По умолчанию свойство имеет значение «1».


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.SceneViewProperty.ViewPoint.Scale := 2;

	End Sub Chart3D;


После выполнения примера будет изменен масштаб сцены на заданный.


См. также:


[IScene3DViewPoint](IScene3DViewPoint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
