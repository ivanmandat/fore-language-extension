# IMetabaseCheckList.Add

IMetabaseCheckList.Add
-


# IMetabaseCheckList.Add


## Синтаксис


Add(Value: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm)):
 [IMetabaseCheckListItem](../IMetabaseCheckListItem/IMetabaseCheckListItem.htm);


## Параметры


Value. Описание объекта, который
 необходимо добавить в список проверки контрольных сумм.


## Описание


Метод Add осуществляет добавление
 объекта репозитория в список проверки контрольных сумм.


## Пример


Для выполнения примера предполагается наличие в репозитории объекта
 с идентификатором FOLDER_1.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Children: IMetabaseObjectDescriptors;

	    CheckList: IMetabaseCheckList;

	Begin

	    MB := MetabaseClass.Active;

	    CheckList := MB.CreateCheckList;

	    MObj := MB.ItemById("Folder_1");

	    Children := MObj.Children;

	    CheckList.Add(MObj);

	    For Each MObj In Children Do

	        CheckList.Add(MObj);

	    End For;

	    CheckList.SaveToFile("c:\control.crc");

	End Sub UserProc;


После выполнения примера будет создан список для расчета контрольных
 сумм объектов. В данный список будет добавлен указанный объект и все его
 дочерние объекты, если они имеются. После расчёта контрольные суммы будут
 сохранены в указанный файл.


См. также:


[IMetabaseCheckList](IMetabaseCheckList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
