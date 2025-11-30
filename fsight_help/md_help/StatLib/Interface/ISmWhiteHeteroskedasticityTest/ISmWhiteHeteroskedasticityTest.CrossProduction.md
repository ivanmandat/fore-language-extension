# ISmWhiteHeteroskedasticityTest.CrossProduction

ISmWhiteHeteroskedasticityTest.CrossProduction
-


# ISmWhiteHeteroskedasticityTest.CrossProduction


## Синтаксис


CrossProduction: Boolean;


## Описание


Свойство CrossProduction определяет будут ли использованы попарные произведения регрессоров (объясняющих рядов).


## Комментарии


Если свойство имеет значение True, то при расчете, помимо имеющихся объясняющих рядов, будут использованы их попарные произведения. Например, если рассматривается 3 ряда (S1, S2, S3) и свойство установлено в True, то будут дополнительно рассмотрены регрессоры: S1*S2, S2*S3, S1*S3. Если свойство имеет значение False, то попарные произведения использованы не будут. Данный вариант (False) рекомендуется использовать, только если количество объясняющих рядов (регрессоров) велико.


Тестовая регрессия с попарными произведениями является более правдоподобным вариантом.


По умолчанию свойство имеет значение False.


## Пример


Использование свойства приведено в примере для [ISmWhiteHeteroskedasticityTest.ChiTest](ISmWhiteHeteroskedasticityTest.ChiTest.htm).


См. также:


[ISmWhiteHeteroskedasticityTest](ISmWhiteHeteroskedasticityTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
