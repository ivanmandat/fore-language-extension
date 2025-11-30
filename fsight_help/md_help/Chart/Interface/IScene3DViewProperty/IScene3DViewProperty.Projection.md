# IScene3DViewProperty.Projection

IScene3DViewProperty.Projection
-


# IScene3DViewProperty.Projection


## Синтаксис


Projection: [IScene3DProjection](../IScene3DProjection/IScene3DProjection.htm);


## Описание


Свойство Projection параметры
 проекции сцены. Работа с доступными параметрами осуществляется посредством
 интерфейса IScene3DProjection.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.SceneViewProperty.Projection.Type := Scene3DProjectionType.Ortho;

	End Sub Chart3D;


После выполнения примера будет установлен позиционный вид на сцену.


См. также:


[IScene3DViewProperty](IScene3DViewProperty.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
