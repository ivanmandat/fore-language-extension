# IMetabaseCheckList.LoadFromStream

IMetabaseCheckList.LoadFromStream
-


# IMetabaseCheckList.LoadFromStream


## Синтаксис


		LoadFromStream(Reader: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Reader. Поток, в котором сохранены
 контрольные суммы объектов репозитория.


## Описание


Метод LoadFromStream осуществляет
 загрузку из потока и проверку контрольных сумм объектов репозитория.


## Комментарии


Для сохранения контрольных сумм в поток используется метод [SaveToStream](IMetabaseCheckList.SaveToStream.htm). Перед загрузкой контрольных
 сумм методом LoadFromStream рекомендуется
 курсор в потоке, передаваемом в параметре Reader, установить в начало
 с помощью метода [IIOStream.Seek](ModIo.chm::/Interface/IIOStream/IIOStream.Seek.htm).


## Пример


Добавьте ссылки на системные сборки: IO, Metabase.


					Sub LoadCheckList(Reader: IIOStream);

		Var

		    MB: IMetabase;

		    CheckList: IMetabaseCheckList;

		    ListItem: IMetabaseCheckListItem;

		Begin

		    MB := MetabaseClass.Active;

		    CheckList := MB.CreateCheckList;

		    Reader.Seek(0, SeekOrigin.Beginning);

		    CheckList.LoadFromStream(Reader);

		    For Each ListItem In CheckList Do

		        Debug.Write("Идентификатор: " + ListItem.Id);

		        Debug.Write(" Хеш-код: " + ListItem.Hash);

		        Debug.Write(" Статус:");

		        Select Case ListItem.Status As Integer

		            Case 1: Debug.WriteLine(" - Объект идентичен");

		            Case 2: Debug.WriteLine(" - Объект имеют отличия");

		            Case 3: Debug.WriteLine(" - Объект отсутствует в репозитории");

		        End Select;

		    End For;

		End Sub LoadCheckList;


Указанная процедура позволяет загружать контрольные суммы из потока
 и выводить информацию по объектам в консоль среды разработки. Поток, из
 которого осуществляется загрузка, передаётся в качестве входного параметра.


См. также:


[IMetabaseCheckList](IMetabaseCheckList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
