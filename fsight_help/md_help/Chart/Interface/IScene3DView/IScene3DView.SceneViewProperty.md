# IScene3DView.SceneViewProperty

IScene3DView.SceneViewProperty
-


# IScene3DView.SceneViewProperty


## Синтаксис


SceneViewProperty: [IScene3DViewProperty](../IScene3DViewProperty/IScene3DViewProperty.htm);


## Описание


Свойство Scene3DViewProperty
 определяет настройки вида на сцену. Работа с доступными настройками осуществляется
 посредством интерфейса IScene3DViewProperty.


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


[IScene3DView](IScene3DView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
