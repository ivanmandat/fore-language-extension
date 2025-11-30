# IMDCalculationInstance.AllFormulas

IMDCalculationInstance.AllFormulas
-


# IMDCalculationInstance.AllFormulas


## Синтаксис


AllFormulas: [IMDCalculationFormulasIterator](../IMDCalculationFormulasIterator/IMDCalculationFormulasIterator.htm);


## Описание


Метод AllFormulas возвращает итератор по формулам многомерного расчета.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного расчета с идентификатором «OBJMD».


			Sub UserProc;

Var

    Mb: IMetabase;

    MDInst: IMDCalculationInstance;

    Iterator: IMDCalculationFormulasIterator;

    i: integer;

Begin

    Mb := MetabaseClass.Active;

    MDInst := Mb.ItemById("OBJMD").Open(Null) As IMDCalculationInstance;

    Iterator := MDInst.AllFormulas;

    i := 0;

    While Not Iterator.Eof Do

        i := i + 1;

        Iterator.Next;

    End While;

    Debug.WriteLine("Количество формул: " + i.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено количество имеющихся формул в многомерном расчете.


См. также:


[IMDCalculationInstance](IMDCalculationInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
