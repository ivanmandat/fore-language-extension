# IScene3DTextureManager.Count

IScene3DTextureManager.Count
-


# IScene3DTextureManager.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 текстур в списке.


## Пример


В рассматриваемом примере предполагается, что существует объект S типа IScene3D.


	Sub Chart3D;


	Var


	s : IScene3D;


	Count : Integer;


	Begin


	Count := s.DisplayedObjects.TextureManager.Count;


	End Sub Chart3D;


После выполнения примера в переменной Count будет храниться количество
 текстур.


См. также:


[IScene3DTextureManager](IScene3DTextureManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
