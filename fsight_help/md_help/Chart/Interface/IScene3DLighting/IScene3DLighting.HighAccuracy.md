# IScene3DLighting.HighAccuracy

IScene3DLighting.HighAccuracy
-


# IScene3DLighting.HighAccuracy


## Синтаксис


HighAccuracy: Boolean;


## Описание


Свойство HighAccuracy определяет
 сглаженный вид, реалистичность изображения трехмерной сцены.


## Комментарии


Если значение данного свойства True,
 то используется реалистичность, при значении False
 - нет.


По умолчанию свойство имеет значение True.


Данное свойство увеличивает ресурсоемкость, плохо совместим с анимацией.
 Данное свойство требует включенной освещенности - свойство IScene3DLighting.UseLighting.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.Lighting.HighAccuracy := False;

	End Sub Chart3D;


После выполнения примера для сцены будет отключено ощущение реалистичности
 изображения.


См. также:


[IScene3DLighting](IScene3DLighting.htm) |
 [IScene3DLighting.UseLighting](IScene3DLighting.UseLighting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
