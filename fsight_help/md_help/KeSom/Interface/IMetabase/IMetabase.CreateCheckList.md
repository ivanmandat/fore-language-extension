# IMetabase.CreateCheckList

IMetabase.CreateCheckList
-


# IMetabase.CreateCheckList


## Синтаксис


		CreateCheckList: [IMetabaseCheckList](../IMetabaseCheckList/IMetabaseCheckList.htm);


## Описание


Метод CreateCheckList создает
 список, используемый для расчета и проверки контрольных сумм объектов
 репозитория.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором «Folder_1».


Добавьте ссылку на системную сборку Metabase.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    CheckList: IMetabaseCheckList;

		    MObj, MObj1: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    CheckList := MB.CreateCheckList;

		    MObj := MB.ItemById("Folder_1");

		    CheckList.Add(MObj);

		    For Each MObj1 In MObj.Children Do

		        CheckList.Add(MObj1);

		    End For;

		    CheckList.SaveToFile("c:\control.crc");

		End Sub UserProc;


После выполнения примера будет создан список для расчета контрольных
 сумм объектов. В данный список будет добавлен объекта «Folder_1» и все
 его дочерние объекты, если таковые имеются. После расчета контрольные
 суммы будут сохранены в файл «c:\control.crc».


См. также:


[IMetabase](IMetabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
