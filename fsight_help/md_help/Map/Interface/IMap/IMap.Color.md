# IMap.Color

IMap.Color
-


# IMap.Color


## Синтаксис


Color: [IGxColor](ModDrawing.chm::/Interface/IGxColor/IGxColor.htm);


## Описание


Свойство Color определяет цвет
 фона карты. При задании цвета фона для карты он становится прозрачным.


## Пример


В рассматриваемом примере предполагается, что существует объект Map типа IMap.


Добавьте ссылки на системные сборки: Drawing, Map.


	Sub Color;

	Var

	    Map : IMap;

	Begin

	    Map.Color := New GxColor.CreateARGB(128,28,128,128);

	End Sub Color;


После выполнения примера фон карты будет прозрачного зеленого цвета.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
