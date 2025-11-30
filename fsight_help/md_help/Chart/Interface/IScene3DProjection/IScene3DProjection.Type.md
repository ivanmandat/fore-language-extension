# IScene3DProjection.Type

IScene3DProjection.Type
-


# IScene3DProjection.Type


## Синтаксис


Type: [Scene3DProjectionType](../../Enums/Scene3DProjectionType.htm);


## Описание


Свойство Type определяет тип
 проекции трехмерной сцены.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.SceneViewProperty.Projection.Type := Scene3DProjectionType.Ortho;

	End Sub Chart3D;


После выполнения примера будет установлена ортогональная проекция сцены.


См. также:


[IScene3DProjection](IScene3DProjection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
