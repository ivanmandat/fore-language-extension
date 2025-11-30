# IScene3DView.Lighting

IScene3DView.Lighting
-


# IScene3DView.Lighting


## Синтаксис


Lighting: [IScene3DLighting](../IScene3DLighting/IScene3DLighting.htm);


## Описание


Свойство Lighting определяет
 освещение сцены. Работа с доступными параметрами осуществляется посредством
 интерфейса IScene3DLighting.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.Lighting.HighAccuracy := False;

	End Sub Chart3D;


После выполнения примера для сцены будет отключено освещение, которое
 обеспечивает ощущение реалистичности.


См. также:


[IScene3DView](IScene3DView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
