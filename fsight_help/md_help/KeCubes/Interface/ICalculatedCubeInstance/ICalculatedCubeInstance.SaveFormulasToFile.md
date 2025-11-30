# ICalculatedCubeInstance.SaveFormulasToFile

ICalculatedCubeInstance.SaveFormulasToFile
-


# ICalculatedCubeInstance.SaveFormulasToFile


## Синтаксис


SaveFormulasToFile(FileName: String; Selection:
 [IDimSelectionSet](kedims.chm::/interface/idimselectionset/idimselectionset.htm));


## Параметры


FileName. Наименование и путь
 к файлу, в который сохраняются формулы вычисляемого куба.


Selection. Отметка элементов
 куба, по которым необходимо сохранить формулы.


## Описание


Метод SaveFormulasToFile осуществляет
 сохранение формул вычисляемого куба в файл.


## Пример


Для выполнения примера, предполагается наличие в репозитории вычисляемого
 куба с идентификатором "Calc_Cube".


			Sub UserProc;

Var

    MB: IMetabase;

    CubeInst: ICalculatedCubeInstance;

    DimSS: IDimSelectionSet;

    DimSel: IDimSelection;

Begin

    MB := MetabaseClass.Active;

    CubeInst := MB.ItemById("Calc_Cube").Open(Null) As ICalculatedCubeInstance;

    DimSS := CubeInst.Destination.CreateDimSelectionSet;

    For Each DimSel In DimSS Do

        DimSel.SelectAll;

    End For;

    CubeInst.SaveFormulasToFile("C:\formul.txt", DimSS);

End Sub UserProc;


После выполнения примера формулы вычисляемого куба "Calc_Cube"
 будут сохранены в файл "formul.txt".


См. также:


[ICalculatedCubeInstance](ICalculatedCubeInstance.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
