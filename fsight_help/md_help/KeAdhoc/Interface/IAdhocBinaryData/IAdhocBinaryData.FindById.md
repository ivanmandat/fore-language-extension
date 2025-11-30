# IAdhocBinaryData.FindById

IAdhocBinaryData.FindById
-


# IAdhocBinaryData.FindById


## Синтаксис


FindById(Id: String): [IAdhocBinaryItem](../IAdhocBinaryItem/IAdhocBinaryItem.htm);


## Параметры


Id. Идентификатор объекта аналитической
 панели.


## Описание


Метод FindById выполняет поиск
 объекта аналитической панели по идентификатору.


## Комментарии


Метод FindById возвращает объект,
 идентификатор которого задается в качестве входного параметра Id.


Если объект не найден, то метод возвращает значение Null.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1». В репозитории должна быть создана
 аналитическая панель с идентификатором «AN_PAN», содержащая элемент коллекции
 бинарных данных с идентификатором «ITEM». Добавьте ссылки на системные
 сборки «Metabase», «Adhoc», «Fore», «Io».


			Sub UserProc;

Var

    MB: IMetabase;

    File: IFileInfo;

    BW: IBinaryWriter;

    AP: IAdhocReport;

    BD: IAdhocBinaryData;

Begin

    MB := MetabaseClass.Active;

    AP := MB.ItemById("AN_PAN").Edit As IAdhocReport;

    BD := AP.BinaryData;

    File := New FileInfo.Attach("c:\Image.jpg");

    BW := File.OpenBinaryWriter(True);

    BD.FindById("ITEM").WriteToStream(BW.Stream);

    BD.RemoveById("ITEM");

End Sub UserProc;


После выполнения примера будет найден и удален из коллекции бинарных
 данных аналитической панели элемент с идентификатором «ITEM», данные элемента
 будут записаны в файл «c:\Image.jpg».


См. также:


[IAdhocBinaryData](IAdhocBinaryData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
