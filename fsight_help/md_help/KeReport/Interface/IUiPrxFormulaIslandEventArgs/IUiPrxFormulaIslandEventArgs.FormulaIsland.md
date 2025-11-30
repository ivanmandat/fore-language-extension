# IUiPrxFormulaIslandEventArgs.FormulaIsland

IUiPrxFormulaIslandEventArgs.FormulaIsland
-


# IUiPrxFormulaIslandEventArgs.FormulaIsland


## Синтаксис


FormulaIsland: [IPrxFormulaIsland](../IPrxFormulaIsland/IPrxFormulaIsland.htm);


## Описание


Свойство FormulaIsland возвращает
 область формул отчета, которая была вычислена.


## Пример


В примере рассмотрено событие, которое наступает после вычисления области
 формул.


			Sub EventOnAfterExecuteFormulaIsland(Args: IUiPrxFormulaIslandEventArgs);

Begin

    WinApplication.InformationBox("Область формул: " + Args.FormulaIsland.Id);

End Sub EventOnAfterExecuteFormulaIsland;


После наступления события будет выдано информационное сообщение, содержащее
 идентификатор области формул.


См. также:


[IUiPrxFormulaIslandEventArgs](IUiPrxFormulaIslandEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
