# IScene3DView.BackgroundColor

IScene3DView.BackgroundColor
-


# IScene3DView.BackgroundColor


## Синтаксис


BackgroundColor: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство BackgroundColor определяет цвет фона трехмерной сцены.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


Sub Chart3D;


Var


S : IScene3D;


Begin


S.SceneView.BackgroundColor := New GxColor.CreateARGB(255,0,0,255);


End Sub Chart3D;


После выполнения примера цвет фона сцены будет изменен на синий.


См. также:


[IScene3DView](IScene3DView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
