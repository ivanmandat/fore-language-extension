# IScene3DLighting.UseLighting

IScene3DLighting.UseLighting
-


# IScene3DLighting.UseLighting


## Синтаксис


UseLighting: Boolean;


## Описание


Свойство UseLighting определяет
 использование освещения трехмерной сцены.


## Комментарии


Если значение данного свойства True,
 то освещение используется, при значении False
 - освещение не используется.


По умолчанию свойство имеет значение True.


## Пример


В рассматриваемом примере предполагается существование объекта S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.SceneView.Lighting.UseLighting := False;

	End Sub Chart3D;


После выполнения примера для сцены будет отключено освещение.


См. также:


[IScene3DLighting](IScene3DLighting.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
