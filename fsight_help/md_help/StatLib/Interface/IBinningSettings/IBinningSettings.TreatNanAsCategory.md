# IBinningSettings.TreatNanAsCategory

IBinningSettings.TreatNanAsCategory
-


# IBinningSettings.TreatNanAsCategory


## Синтаксис


TreatNanAsCategory: Boolean;


## Описание


Свойство TreatNanAsCategory
 определяет, считать ли пропуски отдельной категорией.


## Комментарии


Допустимые значения:


	- True. Пропуски выделяются
	 в отдельную категорию;


	- False. Пропуски не считаются
	 отдельной категорией.


Если процедура Binning применяется для методов интеллектуального анализа
 данных, то свойство TreatNanAsCategory
 учитывается только для объясняющих рядов. Если свойство TreatNanAsCategory
 задано для объясняемого ряда, то оно будет проигнорировано.


## Пример


Использование свойства приведено в примере для [ISmBinning.Settings](../ISmBinning/ISmBinning.Settings.htm).


См. также:


[IBinningSettings](IBinningSettings.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
