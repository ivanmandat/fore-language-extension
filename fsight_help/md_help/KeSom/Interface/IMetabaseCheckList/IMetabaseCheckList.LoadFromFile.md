# IMetabaseCheckList.LoadFromFile

IMetabaseCheckList.LoadFromFile
-


# IMetabaseCheckList.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName. Файл, содержащий
 список проверяемых объектов репозитория и их контрольные суммы.


## Описание


Метод LoadFromFile осуществляет
 загрузку из файла и проверку контрольных сумм объектов репозитория.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С:" файла "control.crc", содержащего список объектов
 репозитория их контрольные суммы.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CheckList: IMetabaseCheckList;

	    ListItem: IMetabaseCheckListItem;

	Begin

	    MB := MetabaseClass.Active;

	    CheckList := MB.CreateCheckList;

	    CheckList.LoadFromFile("c:\control.crc");

	    For Each ListItem In CheckList Do

	        Debug.Write("Идентификатор: " + ListItem.Id);

	        Debug.Write(". Хеш-код: " + ListItem.Hash);

	        Debug.Write(". Статус:");

	        Select Case ListItem.Status

	            Case MetabaseCheckStatus.Identical: Debug.WriteLine(" - Объект идентичен");

	            Case MetabaseCheckStatus.Different: Debug.WriteLine(" - Объекты имеют отличия");

	            Case MetabaseCheckStatus.Absent: Debug.WriteLine(" - Объект отсутствует в репозитории");

	        End Select;

	    End For;

	End Sub UserProc;


После выполнения примера будет осуществлена проверка контрольных сумм
 объектов репозитория, список которых содержится в указанном файле. Идентификатор
 объектов, хеш-код и результат сравнения контрольных сумм будет выведен
 в консоль среды разработки.


См. также:


[IMetabaseCheckList](IMetabaseCheckList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
