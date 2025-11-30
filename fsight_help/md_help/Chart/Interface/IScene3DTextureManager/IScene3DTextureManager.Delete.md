# IScene3DTextureManager.Delete

IScene3DTextureManager.Delete
-


# IScene3DTextureManager.Delete


## Синтаксис


Delete(Index: Integer);


## Параметры


Index -
 индекс текстуры.


## Описание


Метод Delete удаляет текстуру
 из списка по заданному индексу.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;

	Var

	    s : IScene3D;

	Begin

	    s.DisplayedObjects.TextureManager.Delete(0);

	End Sub Chart3D;


После выполнения примера будет удалена текстура с индексом «0»


См. также:


[IScene3DTextureManager](IScene3DTextureManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
