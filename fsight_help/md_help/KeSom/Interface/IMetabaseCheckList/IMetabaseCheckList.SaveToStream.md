# IMetabaseCheckList.SaveToStream

IMetabaseCheckList.SaveToStream
-


# IMetabaseCheckList.SaveToStream


## Синтаксис


		SaveToStream(Writer: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Writer. Поток, в который будут
 сохранены контрольные суммы объектов репозитория.


## Описание


Метод SaveToStream осуществляет
 сохранение в поток списка объектов репозитория и рассчитанных для них
 контрольных сумм.


## Комментарии


Для загрузки контрольных сумм и проверки объектов репозитория используйте
 метод [LoadFromStream](IMetabaseCheckList.LoadFromStream.htm).


## Пример


Добавьте ссылки на системные сборки: IO, Metabase.


					Sub SaveCheckList(ParentID: String; Var Writer: IIOStream);

		Var

		    MB: IMetabase;

		    CheckList: IMetabaseCheckList;

		    MObj, MObj1: IMetabaseObjectDescriptor;

		Begin

		    MB := MetabaseClass.Active;

		    CheckList := MB.CreateCheckList;

		    MObj := MB.ItemById(ParentID);

		    CheckList.Add(MObj);

		    For Each MObj1 In MObj.Children Do

		        CheckList.Add(MObj1);

		    End For;

		    CheckList.SaveToStream(Writer);

		End Sub SaveCheckList;


Указанная процедура позволяет сохранять контрольные суммы в поток. В
 качестве параметров процедуры передаются идентификатор папки, для дочерних
 объектов которой будут считаться контрольные суммы, и поток, в который
 происходит сохранение.


См. также:


[IMetabaseCheckList](IMetabaseCheckList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
