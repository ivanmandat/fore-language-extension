# IRubricatorFormulaData.Hash

IRubricatorFormulaData.Hash
-


# IRubricatorFormulaData.Hash


## Синтаксис


Hash: String;


## Описание


Свойство Hash возвращает хеш-код
 формулы.


## Пример


Для выполнения примера в репозитории должна присутствовать база данных
 временных рядов с идентификатором OBJ_RUBRICATOR, содержащая справочник
 формул.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubInst: IRubricatorInstance;

    FormulaData: IRubricatorFormulaData;

Begin

    Mb := MetabaseClass.Active;

    RubInst := Mb.ItemById("OBJ_RUBRICATOR").Open(Null) As IRubricatorInstance;

    FormulaData := RubInst.GetFormulaData(1);

    If FormulaData <> Null Then

        Debug.WriteLine(FormulaData.Hash);

    Else

        Debug.WriteLine("Формула с данным ключом не существует");

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен хеш-код формулы
 с ключом 1.


См. также:


[IRubricatorFormulaData](IRubricatorFormulaData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
