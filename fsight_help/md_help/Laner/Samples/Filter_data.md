# Фильтрация данных в рабочей книге

Фильтрация данных в рабочей книге
-


# Фильтрация данных в рабочей книге


Для выполнения примера предполагается наличие в репозитории рабочей
 книги с идентификатором «OBJ123», для рядов которой будет применен фильтр
 на скрытие пустых значений. Добавьте ссылки на системные сборки:


	- Express;


	- Laner;


	- Metabase;


## Пример


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Exp: IEaxAnalyzer;

    WB: ILaner;

    Filter: ILanerFilter;

Begin

    MB := MetabaseClass.Active;

    //Открываем рабочую книгу на редактирование

    MObj := MB.ItemById("OBJ123").Edit;

    Exp := MObj As IEaxAnalyzer;

    WB := Exp.Laner;

    Filter := WB.Filter;

    //Устанавливаем фильтр для скрытия пустых значений

    Filter.SuppressEmpty := True;

    //Будут скрываться ячейки как с концов, так и внутри данных ряда

    Filter.SuppressEmptyArea := LnSuppressEmptyArea.FullSerie;

    MObj.Save;

End Sub UserProc;


После выполнения примера для рядов рабочей книги будет применен фильтр
 на скрытие пустых значений. Будут скрыты пустые значения по краям и внутри
 ряда.


См. также:


[Примеры](Laner_Samples.htm)
 | [ILaner](../Interface/ILaner/ILaner.htm) | [ILanerFilter](../Interface/ILanerFilter/ILanerFilter.htm)
 | [LnSuppressEmptyArea](../Enums/LnSuppressEmptyArea.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
