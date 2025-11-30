# IScene3D.SceneView

IScene3D.SceneView
-


# IScene3D.SceneView


## Синтаксис


SceneView: [IScene3DView](../IScene3DView/IScene3DView.htm);


## Описание


Свойство SceneView определяет
 настройки отображения сцены. Работа с доступными параметрами осуществляется
 посредством интерфейса IScene3DView.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.BeginUpdate;

	    s.SceneView.BackgroundColor := New GxColor.CreateARGB(255,0,0,255);

	    s.EndUpdate;

	End Sub Chart3D;


После выполнения примера цвет фона сцены будет изменен на синий.


См. также:


[IScene3D](IScene3D.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
