# IMap.Font

IMap.Font
-


# IMap.Font


## Синтаксис


Font: [IGxFont](ModDrawing.chm::/Interface/IGxFont/IGxFont.htm);


## Описание


Свойство Font определяет параметры
 шрифта на карте.


## Комментарии


Для определения цвета шрифта на карте используйте свойство [IMap.FontColor](IMap.FontColor.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPR_MAP. В отчете должна быть настроена карта.


Добавьте ссылки на системные сборки: Drawing, Express, Map, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Express: IEaxAnalyzer;

	    MapFont: IMap;

	Begin

	    mb := MetabaseClass.Active;

	    Express := mb.ItemById("EXPR_MAP").Edit As IEaxAnalyzer;

	    MapFont := Express.Map.Map;

	    MapFont.Font := New GxFont.Create("Arial Black", 20, GxFontStyle.BoldItalic, GxUnit.Point);

	    MapFont.FontColor := New GxColor.CreateARGB(255,0,0,255);

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера параметры шрифта на карте будут изменены на
 заданные.


См. также:


[IMap](IMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
