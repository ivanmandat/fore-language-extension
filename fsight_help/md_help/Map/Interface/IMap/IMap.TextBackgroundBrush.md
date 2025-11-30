# IMap.TextBackgroundBrush

IMap.TextBackgroundBrush
-


# IMap.TextBackgroundBrush


## Синтаксис


TextBackgroundBrush: [IGxBrush](ModDrawing.chm::/Interface/IGxBrush/IGxBrush.htm);


## Описание


Свойство TextBackgroundBrush
 определяет фон текста на карте.


## Пример


В рассматриваемом примере предполагается, что существует объект Map типа IMap.


Добавьте ссылки на системные сборки: Drawing, Map.


	Sub Brush;

	Var

	    Map: IMap;

	    Color: IGxColor;

	Begin

	    Color := GxColor.FromName("Red");

	    // Зададим цвет фона текста

	    Map.TextBackgroundBrush := New GxSolidBrush.Create(Color);

	    // Зададим обводку текста

	    Map.TextBorderPen := New GxPen.CreateSolid(New GxColor.CreateARGB(255,0,0,255),1.02);

	End Sub Brush;


После выполнения примера цвет фона текста будет изменен на красный и
 появится синяя обводка заданной толщины.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
