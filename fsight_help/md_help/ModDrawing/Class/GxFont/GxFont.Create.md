# GxFont.Create

GxFont.Create
-


# GxFont.Create


## Синтаксис


Create(FamilyName: String; Size: Double; [Style:
 [GxFontStyle](../../Enums/GxFontStyle.htm) = 0;] [Unit: [GxUnit](../../Enums/GxUnit.htm) = 3]);


## Параметры


FamilyName. Наименование шрифта;


Size. Размер шрифта;


Style. Стиль шрифта. Необязательный
 параметр, по умолчанию используется обычный шрифт;


Unit. Единицы измерения размера
 шрифта. Необязательный параметр, по умолчанию размер шрифта измеряется
 в точках.


## Описание


Конструктор Create создает шрифт
 с заданными параметрами.


Примечание.
 В качестве единиц измерения размера шрифта могут использоваться любые
 единицы, доступные в [GxUnit](../../Enums/GxUnit.htm), кроме
 [GxUnit.Display](../../Enums/GxFontStyle.htm).


## Пример


	Function GetFont: IGxFont;

	Var

	    OutFont: IGxFont;

	Begin

	    OutFont := New GxFont.Create("Arial", 12, GxFontStyle.Bold, GxUnit.Point);

	    Return OutFont;

	End Function GetFont;


Указанная процедура вернет шрифт с заданными параметрами.


См. также:


[GxFont](GxFont.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
